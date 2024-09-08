import useWindowDimensions from "../../utils/useWindowDimensions";
import "./Footer.css";
import appStore from "../../assets/footer/ios-app-store-badge-footer-.svg";
import googlePlay from "../../assets/footer/google-play-badge-footer.svg";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
function Footer() {
  const { width } = useWindowDimensions();
  const { themeName } = useContext(ThemeContext);

  return (
    <>
      <div className="box-20-px-m-top"></div>
      <div
        style={{
          borderTop:
            themeName === "dark-theme"
              ? "1px solid rgba(101, 119, 134, 0.2)"
              : "1px solid rgb(231, 231, 231)",
          boxSizing: "border-box",
          padding: "0px",
          width: "100%",
        }}
      ></div>
      <div className="footer-wrapper unica-regular-font">
        <div className="footer-grid-container">
          <div
            className="col-3 footer-div-wrapper"
            style={{
              color: themeName === "dark-theme" && "white",
            }}
          >
            <div className="default-pointer">Product</div>
            <div className="mt-20"></div>
            <div>How to use guide</div>
            <div>Pricing</div>
            <div>Download</div>
            <div>Changelog</div>
            <div>Roadmap</div>
            <div>Features</div>
            {width <= 768 && <div className="mt-20"></div>}
          </div>
          <div
            className="col-3 footer-div-wrapper"
            style={{
              color: themeName === "dark-theme" && "white",
            }}
          >
            <div className="default-pointer">Resources</div>
            <div className="mt-20"></div>
            <div>Support center</div>
            <div>Tutorials</div>
            <div>Blog</div>
            {width <= 768 && <div className="mt-20"></div>}
          </div>
          <div
            className="col-3 footer-div-wrapper"
            style={{
              color: themeName === "dark-theme" && "white",
            }}
          >
            <div className="default-pointer">Use cases </div>
            <div className="mt-20"></div>
            <div>Developers</div>
            <div>Founders</div>
            <div>Freelancers</div>
            <div>Managers</div>
            <div>Seles</div>
            {width <= 768 && <div className="mt-20"></div>}
          </div>
          <div
            className="col-3 footer-div-wrapper"
            style={{
              color: themeName === "dark-theme" && "white",
            }}
          >
            <div className="default-pointer">About us</div>
            <div className="mt-20"></div>
            <div>Security</div>
            <div>Contact us</div>
            <div>Site map</div>
            <div>Product</div>

            <div className="mt-20"></div>
            <div
              className="default-pointer"
              style={{
                fontWeight: "bold",
              }}
            >
              Get the App
            </div>
            <div className="mt-20"></div>
            <div className="footer-apps-buttons">
              <a href="https://apps.apple.com/us/app/appName/id:appId">
                <img
                  alt="Apple App Store Button"
                  loading="lazy"
                  width="135"
                  height="40"
                  decoding="async"
                  style={{ color: "transparent" }}
                  src={appStore}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.appName">
                <img
                  alt="Android App Store Button"
                  loading="lazy"
                  width="135"
                  height="40"
                  decoding="async"
                  style={{ color: "transparent" }}
                  src={googlePlay}
                />
              </a>
            </div>
          </div>
          {width <= 768 && (
            <div className="footer-copyright-text responsive-footer-text-wrapper">
              <div
                style={{
                  cursor: "default",
                  color: "rgb(112, 112, 112)",
                }}
              >
                © 2024 Stack Task | Designed & Developed by kiwisc0de
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            borderTop:
              themeName === "dark-theme"
                ? "1px solid rgba(101, 119, 134, 0.2)"
                : "1px solid rgb(231, 231, 231)",
            boxSizing: "border-box",
          }}
        ></div>
        <div className="footer-flex-div-container-last-item unica-regular-font">
          <div
            className="logo-wrapper"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <svg
              style={{
                padding: "8px 16px",
                maxHeight: width <= 768 ? "28px" : "33.5px",
                flexShrink: 0,
              }}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" rx="20" fill="#5558fd" />
              <rect x="16" y="28" width="68" height="12" rx="6" fill="white" />
              <rect x="16" y="44" width="68" height="12" rx="6" fill="white" />
              <rect x="16" y="60" width="68" height="12" rx="6" fill="white" />
            </svg>

            <div
              className="footer-brand"
              style={{
                color: themeName === "dark-theme" ? "white" : "#161d28",
              }}
            >
              Stack Task
            </div>
          </div>
          {width > 768 && (
            <div
              style={{
                flex: 1,
              }}
              className="footer-text-wrapper display-none-bp-768px "
            >
              <div
                style={{
                  cursor: "default",
                  color: "rgb(112, 112, 112)",
                }}
              >
                © 2024 Stack Task | Designed & Developed by kiwisc0de
              </div>
            </div>
          )}
          <div
            className="footer-flex-svg-wrapper"
            style={{
              flex: 0,
            }}
          >
            <div>
              <a
                target="_blank"
                href="
                https://x.com
              "
                style={{
                  textDecoration: "none",
                  color: "initial",
                }}
              >
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 18 18"
                  xmlSpace="preserve"
                  fill={themeName === "dark-theme" && "white"}
                >
                  <polygon points="9.1,8.2 6.6,4.6 5.3,4.6 8.4,9.1 8.7,9.6 8.7,9.6 11.4,13.4 12.7,13.4 9.5,8.8  "></polygon>
                  <path d="M9,0C4,0,0,4,0,9c0,5,4,9,9,9s9-4,9-9C18,4,14,0,9,0z M11,14l-2.7-3.9L5,14H4.1l3.8-4.4L4.1,4H7l2.5,3.7L12.7,4h0.9 L9.9,8.2h0l4,5.8H11z"></path>
                </svg>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="
                https://www.facebook.com
             "
                style={{
                  textDecoration: "none",
                  color: "initial",
                }}
              >
                <svg
                  viewBox="0 0 18 18"
                  fill={themeName === "dark-theme" && "white"}
                >
                  <g clipPath="url(#a)">
                    <path d="M8.98158 0C4.0348 0 0 4.06601 0 9.05106C0 13.4141 3.08598 17.1552 7.33265 17.9536L7.59058 18V11.6689H5.30604V9.05106H7.59058V7.05518C7.59058 5.95977 7.913 5.05003 8.52098 4.44662C9.11054 3.8525 9.96725 3.53687 10.9898 3.53687C11.4964 3.53687 12.0215 3.58329 12.3623 3.62971C12.5558 3.64827 12.7124 3.67612 12.8229 3.68541L12.9703 3.70397L12.998 5.94121H11.8649C11.349 5.94121 10.9621 6.08974 10.7134 6.37751C10.5107 6.61888 10.4002 6.95307 10.4002 7.35224V9.05106H12.8966L12.5005 11.6689H10.4094V18L10.6673 17.9536C14.914 17.1552 18 13.4141 18 9.05106C17.9724 4.06601 13.9376 0 8.98158 0Z"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <rect width="18" height="18"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="
                https://www.instagram.com
             "
                style={{
                  textDecoration: "none",
                  color: "initial",
                }}
              >
                <svg
                  viewBox="0 0 18 18"
                  fill={themeName === "dark-theme" && "white"}
                >
                  <g clipPath="url(#a)">
                    <path d="M8.99992 7.17C7.98992 7.17 7.16992 7.99 7.16992 9.01C7.16992 10.02 7.98992 10.84 9.00992 10.84C10.0199 10.84 10.8399 10.02 10.8399 9C10.8399 7.98 10.0199 7.17 8.99992 7.17Z"></path>
                    <path d="M13.47 6.77C13.44 6.23 13.35 5.94 13.28 5.75C13.18 5.49 13.06 5.31 12.87 5.12C12.68 4.93 12.49 4.81 12.24 4.71C12.05 4.63 11.75 4.55 11.22 4.52C10.64 4.49 10.47 4.49 9 4.49C7.53 4.49 7.36 4.49 6.78 4.53C6.24 4.56 5.95 4.65 5.76 4.72C5.5 4.82 5.32 4.94 5.13 5.13C4.94 5.32 4.82 5.51 4.72 5.76C4.65 5.95 4.56 6.25 4.53 6.78C4.5 7.36 4.5 7.53 4.5 9C4.5 10.47 4.5 10.64 4.54 11.22C4.57 11.76 4.66 12.05 4.73 12.24C4.83 12.5 4.95 12.68 5.14 12.87C5.33 13.06 5.52 13.18 5.77 13.28C5.96 13.35 6.26 13.44 6.79 13.47C7.37 13.5 7.54 13.5 9.01 13.5C10.48 13.5 10.65 13.5 11.23 13.46C11.77 13.43 12.06 13.34 12.25 13.27C12.51 13.17 12.69 13.05 12.88 12.86C13.07 12.67 13.19 12.48 13.29 12.23C13.36 12.04 13.45 11.74 13.48 11.21C13.51 10.63 13.51 10.46 13.51 8.99C13.51 7.52 13.51 7.35 13.47 6.77ZM9 11.82C7.44 11.82 6.17 10.56 6.17 9C6.17 7.44 7.43 6.17 8.99 6.17C10.55 6.17 11.82 7.43 11.82 8.99C11.82 10.55 10.56 11.82 9 11.82ZM11.93 6.71C11.57 6.71 11.27 6.42 11.27 6.05C11.27 5.69 11.56 5.39 11.93 5.39C12.29 5.39 12.59 5.68 12.59 6.05C12.59 6.41 12.3 6.71 11.93 6.71Z"></path>
                    <path d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0ZM14.47 11.26C14.44 11.85 14.35 12.25 14.22 12.59C14.08 12.95 13.89 13.26 13.59 13.57C13.29 13.88 12.98 14.06 12.62 14.21C12.27 14.35 11.87 14.44 11.29 14.47C10.7 14.5 10.52 14.5 9.02 14.51C7.53 14.51 7.34 14.51 6.75 14.48C6.16 14.45 5.76 14.36 5.41 14.23C5.05 14.09 4.74 13.9 4.43 13.6C4.12 13.29 3.93 12.99 3.79 12.63C3.65 12.28 3.56 11.88 3.53 11.3C3.5 10.71 3.5 10.53 3.49 9.03C3.49 7.54 3.49 7.35 3.52 6.76C3.55 6.17 3.64 5.77 3.77 5.42C3.91 5.06 4.1 4.75 4.4 4.44C4.7 4.13 5.01 3.94 5.37 3.8C5.72 3.66 6.12 3.57 6.7 3.54C7.29 3.51 7.47 3.51 8.97 3.5C10.46 3.5 10.65 3.5 11.24 3.53C11.83 3.56 12.23 3.65 12.58 3.78C12.94 3.92 13.25 4.11 13.56 4.41C13.87 4.72 14.05 5.02 14.2 5.38C14.34 5.73 14.43 6.13 14.46 6.71C14.49 7.3 14.49 7.48 14.5 8.98C14.5 10.47 14.5 10.66 14.47 11.25V11.26Z"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <rect width="18" height="18"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.tiktok.com"
                style={{
                  textDecoration: "none",
                  color: "initial",
                }}
              >
                <svg
                  viewBox="0 0 18 18"
                  fill={themeName === "dark-theme" && "white"}
                >
                  <g clipPath="url(#a)">
                    <path d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0ZM14.5 7.9C13.38 7.9 12.33 7.55 11.48 6.95V11.26C11.48 13.41 9.69 15.16 7.49 15.16C6.64 15.16 5.85 14.9 5.2 14.45C4.17 13.74 3.5 12.58 3.5 11.26C3.5 9.11 5.29 7.36 7.49 7.36C7.67 7.36 7.85 7.37 8.03 7.4V7.9V9.56C7.86 9.51 7.68 9.48 7.49 9.48C6.48 9.48 5.67 10.28 5.67 11.26C5.67 11.94 6.07 12.54 6.65 12.84C6.9 12.97 7.19 13.04 7.5 13.04C8.48 13.04 9.28 12.28 9.32 11.33V2.84H11.49C11.49 3.02 11.51 3.2 11.54 3.38C11.69 4.19 12.18 4.88 12.86 5.31C13.33 5.61 13.9 5.79 14.5 5.79V6.26V7.91V7.9Z"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <rect width="18" height="18"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://open.spotify.com"
                style={{
                  textDecoration: "none",
                  color: "initial",
                }}
              >
                <svg
                  viewBox="0 0 18 18"
                  fill={themeName === "dark-theme" && "white"}
                >
                  <g clipPath="url(#a)">
                    <path d="M7.60296 10.8152C7.36536 10.8152 7.11827 10.8057 6.88068 10.8152C5.97782 10.8627 5.08448 10.9958 4.21014 11.2049C4.08659 11.2334 3.97254 11.2999 3.89651 11.3949C3.82049 11.49 3.77297 11.6135 3.77297 11.7466C3.77297 12.1362 4.1056 12.3738 4.51426 12.2883C5.84477 11.9937 7.18479 11.8416 8.54382 11.9556C9.88384 12.0507 11.1763 12.4688 12.3358 13.1531C12.4023 13.2006 12.4688 13.2291 12.5449 13.2386C12.6209 13.2482 12.6969 13.2482 12.773 13.2386C12.849 13.2196 12.9155 13.1911 12.982 13.1436C13.0391 13.0961 13.0961 13.0391 13.1341 12.9725C13.1721 12.906 13.2006 12.8395 13.2101 12.7635C13.2196 12.6874 13.2101 12.6114 13.1911 12.5354C13.1721 12.4593 13.1341 12.3928 13.0866 12.3358C13.0391 12.2788 12.982 12.2313 12.9155 12.1932C12.6494 12.0317 12.3738 11.8796 12.0887 11.7466C10.6727 11.0718 9.16156 10.7962 7.60296 10.8057V10.8152ZM7.23231 7.85956C6.9472 7.87856 6.38648 7.90707 5.83527 7.9641C5.17001 8.04013 4.51426 8.17318 3.87751 8.37276C3.77297 8.40127 3.68743 8.45829 3.6114 8.52482C3.53537 8.59134 3.47835 8.68638 3.44034 8.78141C3.40232 8.87645 3.38332 8.98099 3.39282 9.08553C3.39282 9.19007 3.43083 9.29461 3.48786 9.38015C3.57339 9.5227 3.69694 9.62724 3.849 9.68427C4.00106 9.74129 4.17212 9.74129 4.32418 9.68427C4.94192 9.5037 5.56917 9.38015 6.21542 9.31362C7.26082 9.20908 8.31573 9.22809 9.36114 9.38965C10.7487 9.59873 12.0602 10.0074 13.2672 10.7297C13.3432 10.7772 13.4382 10.8152 13.5238 10.8342C13.6093 10.8532 13.7138 10.8437 13.7994 10.8342C13.8944 10.8152 13.9799 10.7772 14.056 10.7202C14.132 10.6631 14.1985 10.5966 14.246 10.5111C14.2936 10.4351 14.3316 10.34 14.3411 10.245C14.3506 10.1499 14.3411 10.0549 14.3221 9.96938C14.2936 9.87434 14.2555 9.79831 14.1985 9.72228C14.1415 9.64625 14.0655 9.58923 13.9894 9.54171C13.6853 9.36114 13.3717 9.19007 13.0486 9.03802C11.2904 8.2207 9.44667 7.86906 7.25132 7.84055L7.23231 7.85956ZM7.69799 4.78986C7.40338 4.78986 7.11827 4.78036 6.82365 4.78986C5.74974 4.82788 4.68532 4.97994 3.64942 5.25554C3.49736 5.28406 3.3548 5.34108 3.22175 5.3981C3.04118 5.49314 2.89863 5.6547 2.8321 5.85428C2.76558 6.04435 2.76558 6.26294 2.8416 6.45301C2.92714 6.64308 3.06969 6.79514 3.25977 6.88068C3.44984 6.96621 3.65892 6.99472 3.8585 6.9377C4.43823 6.80465 5.01795 6.66209 5.60718 6.57656C6.89968 6.39599 8.21119 6.38648 9.5132 6.53854C11.2239 6.72862 12.868 7.12777 14.3696 7.99261C14.5026 8.06864 14.6547 8.10665 14.8068 8.09715C14.9588 8.09715 15.1109 8.03062 15.2249 7.93559C15.339 7.85956 15.434 7.74551 15.5005 7.62196C15.5671 7.49842 15.5956 7.35586 15.5861 7.21331C15.5766 7.07075 15.5385 6.9377 15.472 6.81415C15.396 6.6906 15.301 6.59557 15.1774 6.51954C14.6262 6.18691 14.037 5.9113 13.4287 5.70222C11.5755 5.02746 9.65576 4.77086 7.69799 4.78036V4.78986ZM9 0C10.188 0 11.3569 0.228089 12.4498 0.684266C13.5428 1.14044 14.5407 1.8057 15.377 2.64203C16.2133 3.47835 16.8786 4.47624 17.3252 5.57867C17.7719 6.6811 18 7.85005 18 9.03802C17.981 14.1225 13.7994 18.076 8.83844 18C4.02957 17.9145 0 14.0084 0 9C0 7.82154 0.237592 6.64308 0.684266 5.55016C1.14044 4.45723 1.7962 3.46885 2.63252 2.63252C3.46885 1.7962 4.45723 1.13094 5.55016 0.684266C6.65259 0.228089 7.82154 0 9 0Z"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <rect width="18" height="18"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
