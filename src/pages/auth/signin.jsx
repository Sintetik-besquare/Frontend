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
    <div id="signin">
      <div
        class="signin-image-card"
        style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}
      >
        <img src={MobileLogin} alt="N/A" />
      </div>
      <div
        class="signin-details-card"
        style={{
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <p style={{ color: "white", alignContent: "center" }}>
          <h2>
            <b>
              <center>SIGN IN</center>
            </b>
          </h2>
        </p>
        <form>
          <p style={{ color: "yellow", fontSize: "20" }}>
            Welcome back!
            <br />
            Good to see you again.
          </p>
          &nbsp;
          <div className="signin-input">
            <input type="text" placeholder="Username" />
            <FaRegUserCircle
              style={{
                color: "rgba(187, 187, 187, 0.8)",
                backgroundColor: "rgba(29, 29, 29, 1)",
                fontSize: "20px",
              }}
            />
          </div>
          &nbsp;
          <div className="signin-input">
            <input type="password" placeholder="Password" />
            <FaEyeSlash
              style={{
                color: "rgba(187, 187, 187, 0.8)",
                backgroundColor: "rgba(29, 29, 29, 1)",
                fontSize: "20px",
              }}
            />
          </div>
          <p style={{ color: "red" }}>Forgot password?</p>
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
                <BiExit
                  style={{
                    fontSize: "20px",
                  }}
                />
              </div>
            </button>
            &nbsp;
          </center>
          <center>
            <p style={{ color: "white" }}>
              Need an account? <br />
              <a href="https://www.google.com">Create one here</a>
            </p>
          </center>
        </form>
      </div>
    </div>
  );
};

export default observer(SigninPage);
