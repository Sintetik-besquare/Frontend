import React from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";
import MobileLogin from "../../assets/Mobile login-cuate 1.svg";
import { FaRegUserCircle, FaEyeSlash } from "react-icons/fa";
import { BiExit } from "react-icons/bi";

const SigninPage = () => {
  const { app_store } = useStores();
  const navigate = useNavigate();

  function login() {
    navigate("/", { replace: true });
    app_store.setLogin(true);
  }

  return (
    <div id="signin-background">
      <div id="signin">
        <div class="signin-image-card">
          <img src={MobileLogin} alt="N/A" style={{ width: "90%" }} />
        </div>
        <div class="signin-details-card">
          <h2>
            <b>
              <center>SIGN IN</center>
            </b>
          </h2>
          <form className="signin-form">

            <h4
              style={{
                paddingLeft: "0rem",
                textAlign: "left",
                marginRight: "3rem",
              }}
            >
              Welcome back!
              <br />
              Good to see you again.
            </h4>{" "}
            &nbsp;
            <div className="signin-input">
              <input type="text" placeholder="Username" id="uname-input" />
              <FaRegUserCircle id="username-icon" />
            </div>
            &nbsp;
            <div className="signin-input">
              <input type="password" placeholder="Password" id="pw-input" />
              <FaEyeSlash id="password-icon" />
            </div>
            &nbsp;
            <h5>Forgot password?</h5>
            &nbsp;
            <center>
              <button
                className="button_green_dark"
                onClick={() => {
                  login();
                }}
              >
                <b>Log In</b>
                <div>
                  <BiExit id="button-icon" />
                </div>
              </button>
              &nbsp;
            </center>
            <center>
              <h6>
                Need an account?{" "}
                <a href="signup" style={{ color: "red" }}>
                  Create one here
                </a>
              </h6>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default observer(SigninPage);
