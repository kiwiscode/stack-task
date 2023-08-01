import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

// when working on local version
const API_URL = "http://localhost:3000";

// when working on deployment version ???

function LoginPage() {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password needs to have at least 6 chars and must contain at least one number,one lowercase and one uppercase letter."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please provide a valid email address.");
      return;
    }

    axios
      .post(`${API_URL}/auth/login`, { username, email, password })
      .then((response) => {
        const { token, user } = response.data;
        console.log(user);
        console.log(response.data);

        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", JSON.stringify(user));
        localStorage.setItem("list", JSON.stringify(user.list));
        localStorage.setItem("active", user.active);
        updateUser(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Request failed with status code 400") {
          setError("Email hasn't been verified yet.Check your inbox.");
        }
        if (error.message === "Request failed with status code 401") {
          setError("Wrong credentials.");
        }
        if (error.message === "Request failed with status code 402") {
          setError("Your password needs to be at least 6 characters long.");
        }
        if (error.message === "Request failed with status code 403") {
          setError(
            "All fields are mandatory.Please provide username,email and password."
          );
        }
        if (error.message === "Request failed with status code 500") {
          setError("Accound not found.");
        }
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="login-input"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        title="Please provide a valid email address."
        className="login-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="login-input"
      />
      {error && <p className="login-error">{error}</p>}
      <button onClick={handleLogin} className="login-button">
        Log in
      </button>
    </div>
  );
}

export default LoginPage;
