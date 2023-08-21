import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useContext, useState, useEffect } from "react";
import Calendar from "../Components/Calendar";
import axios from "axios";

// when working on local version
const API_URL = "http://localhost:3000";

// when working on deployment version ???
function HomePage() {
  const today = new Date();
  const dayNum = today.getDay(); // string
  const monthNum = today.getMonth() + 1; // string
  const date = today.getDate(); // number
  const [taskWindow, setTaskWindow] = useState("hide");
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [calendarDate, setCalendarDate] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const capitalize = function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };

  const getDayStr = () => {
    const lengthSet = dayNum;
    let dayStr = days[lengthSet];
    return dayStr;
  };

  const getMonthStr = () => {
    const lengthSet = monthNum - 1;
    const monthStr = month[lengthSet];

    return monthStr;
  };

  function formatAMPM(date) {
    let hours = date.getHours();
    if (hours <= 11 && hours >= 6) {
      return "Good Morning";
    }
    if (hours >= 12 && hours <= 18) {
      return "Good Afternoon";
    }
    if ((hours > 18 && hours <= 24) || (hours <= 12 && hours < 6)) {
      return "Good Night";
    }
  }

  const { getToken, userInfo, logout } = useContext(UserContext);

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    axios
      .post(`${API_URL}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("token");
        localStorage.removeItem("cartItems");
        localStorage.removeItem("order");
        localStorage.removeItem("list");
        localStorage.removeItem("active");
        logout();
        navigate("/");
      })
      .catch((error) => {
        error;
      });
  };

  const showTaskWindow = () => {
    setTaskWindow("");
  };

  const closeTaskWindow = () => {
    setTaskWindow("hide");
  };

  window.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      setTaskWindow("hide");
    }
  });

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleTaskSubmit = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${API_URL}/task`,
        {
          category,
          task,
          calendarDate: {
            year: calendarDate.getFullYear(),
            day: calendarDate.getDate(),
            month: calendarDate.getMonth() + 1,
          },
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("Task posted and saved to user todo-list array.");
        const newTask = {
          category,
          task,
          calendarDate: {
            year: calendarDate.getFullYear(),
            day: calendarDate.getDate(),
            month: calendarDate.getMonth() + 1,
          },
          time,
        };
        if (response.status === 200) {
          setError("");
        }
        const updatedTaskList = [...taskList, newTask];
        setTaskList(updatedTaskList);
        setCategory("");
        setTask("");

        const updatedUserInfo = {
          ...userInfo,
          list: updatedTaskList,
        };

        localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 403") {
          setError(
            "All fields are mandatory. Please provide category, task, date and time."
          );
        }
      })
      .catch((error) => {
        console.log("Error occured while posting task ! ", error);
      });
  };

  const handleDeleteAll = () => {
    axios
      .delete(`${API_URL}/task/delete-all`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        setTaskList([]);

        const updatedUserInfo = {
          ...userInfo,
          list: [],
        };
        localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteTask = (taskToDelete) => {
    const taskToDeleteIndex = taskList.findIndex(
      (task) => task.task === taskToDelete
    );

    if (taskToDeleteIndex !== -1) {
      const updatedTaskList = [...taskList];
      updatedTaskList[taskToDeleteIndex].isDeleting = true;
      setTaskList(updatedTaskList);

      axios
        .delete(`${API_URL}/task/delete-task`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
          data: {
            task: taskToDelete,
          },
        })
        .then(() => {
          setTimeout(() => {
            const updatedTaskList = taskList.filter(
              (task) => task.task !== taskToDelete
            );
            setTaskList(updatedTaskList);

            const updatedUserInfo = {
              ...userInfo,
              list: updatedTaskList,
            };
            localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

            console.log("Task deleted");
          }, 300);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleCheckboxChange = (selectedCategory) => {
    if (category === selectedCategory) {
      setCategory("");
    } else {
      setCategory(selectedCategory);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${API_URL}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching list:", error);
      });
  }, []);

  return (
    <>
      <div className="main-container">
        {!userInfo.active && (
          <div>
            <h1>TODO APP</h1>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>

            <NavLink to="/signup">
              <button>Signup</button>
            </NavLink>
          </div>
        )}
        {userInfo.active && (
          <nav className="nav-bar">
            <form className="example">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search a task here"
                  name="search"
                  className="search-input"
                />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
            <button className="new-task-btn btn" onClick={showTaskWindow}>
              ⁺ New task
            </button>
            <div className="button-container">
              <button className="drop-btn">⌄</button>
              <div className="dropdown-menu">
                {/* <a href="#" className="dropdown-item">
                  Option 1
                </a>
                <a href="#" className="dropdown-item">
                  Option 2
                </a> */}
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </nav>
        )}
        {userInfo.active && (
          <div>
            <div className="info-container">
              <p>
                {getDayStr()},{getMonthStr()} {date}
              </p>
              <p className="greet">
                {formatAMPM(today)},{userInfo.name}
              </p>
              <p>{"34"} tasks completed</p>
            </div>
            <div className="tasks-container">
              <div className="tasks-info todo">
                <div className="message-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <p className="title-p">To do</p>
                <p className="number-p">{taskList.length} tasks</p>
              </div>

              <div className="tasks-info in-progress">
                <div className="bolt-icon">
                  <i className="fa fa-bolt"></i>
                </div>
                <p className="title-p">In Progress</p>
                <p className="number-p">{taskList.length} tasks</p>
              </div>

              <div className="tasks-info completed">
                <div className="star-icon">
                  <i className="fa fa-star"></i>
                </div>
                <p className="title-p">Completed</p>
                <p className="number-p">{"100"} tasks</p>
              </div>
            </div>
            {taskWindow && (
              <div className="my-tasks">
                <div className="task-header">
                  <p>My tasks</p>
                  <p>Show completed</p>
                </div>
                <div className="task-list">
                  {taskList.map((task) => (
                    <div
                      key={task.id}
                      className={`task ${task.isDeleting ? "fade-out" : ""}`}
                    >
                      <hr />
                      <div className="task-details">
                        <div>
                          <button
                            className="task-button add-to-completed"
                            onClick={() => handleAddTaskToCompleted()}
                          >
                            <i className="fas fa-check"></i>
                          </button>

                          {task.task}
                        </div>

                        <div className="task-details-2">
                          {task.category === "work" && (
                            <div
                              style={{
                                backgroundColor: "#ffff00",
                                color: "black",
                              }}
                              className="category-label work"
                            >
                              {capitalize(task.category)}
                            </div>
                          )}

                          {task.category === "personal" && (
                            <div
                              style={{ backgroundColor: "#800080" }}
                              className="category-label personal"
                            >
                              {capitalize(task.category)}
                            </div>
                          )}
                          {task.category === "family" && (
                            <div
                              style={{ backgroundColor: "#1da1f2" }}
                              className="category-label family"
                            >
                              {capitalize(task.category)}
                            </div>
                          )}
                          {task.category === "pet" && (
                            <div
                              style={{ backgroundColor: "#32de84" }}
                              className="category-label pet"
                            >
                              {capitalize(task.category)}
                            </div>
                          )}
                          <div
                            className={`task-button delete-task ${
                              task.isDeleting ? "slide-up" : ""
                            }`}
                          >
                            <button
                              className="task-button delete-task"
                              onClick={() => handleDeleteTask(task.task)}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div>
              {taskList.length > 0 && (
                <button onClick={() => handleDeleteAll()}>Clear</button>
              )}
            </div>
            <div className={`task-window  ${taskWindow}`}>
              <div className="task-input-container">
                <input
                  type="text"
                  value={task}
                  placeholder="New task"
                  className="task-input"
                  id="task"
                  name="task"
                  onChange={handleTask}
                />
              </div>
              <div>
                <div className="category-checkbox">
                  <label>
                    <input
                      id="cb1"
                      type="checkbox"
                      value="work"
                      checked={category === "work"}
                      onChange={() => handleCheckboxChange("work")}
                    />
                    Work
                  </label>
                  <br />
                  <label>
                    <input
                      id="cb2"
                      type="checkbox"
                      value="personal"
                      checked={category === "personal"}
                      onChange={() => handleCheckboxChange("personal")}
                    />
                    Personal
                  </label>
                  <br />
                  <label>
                    <input
                      id="cb3"
                      type="checkbox"
                      value="family"
                      checked={category === "family"}
                      onChange={() => handleCheckboxChange("family")}
                    />
                    Family
                  </label>
                  <br />
                  <label>
                    <input
                      id="cb4"
                      type="checkbox"
                      value="pet"
                      checked={category === "pet"}
                      onChange={() => handleCheckboxChange("pet")}
                    />
                    Pet
                  </label>
                </div>
              </div>

              <Calendar
                changeTimeAndDate={(currDateAndTimeFromChild) =>
                  setCalendarDate(currDateAndTimeFromChild)
                }
              />
              <input
                type="text"
                value={time}
                placeholder="Enter the time (e.g. 3:30 PM, afternoon 3:30)"
                className="time-input"
                id="time"
                name="time"
                onChange={handleTime}
              />
              <div onClick={closeTaskWindow}>&times;</div>
              <button
                className="task-submit"
                type="submit"
                onClick={handleTaskSubmit}
              >
                Save
              </button>
              {error}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default HomePage;
