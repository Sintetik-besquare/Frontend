import React from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";
import SignupImage from "../../assets/Sign up-cuate (1) 1.svg";
import { FaRegUserCircle, FaEyeSlash } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const SignUp = () => {
  const { app_store } = useStores();
  const navigate = useNavigate();


  function register() {
    navigate("/", { replace: true });
    app_store.setLogin(true);
  }

  return (
    <div id="signup-background">
      <div id="signup">
        <div class="signup-details-card">
          <h2>
            <b>
              <center>SIGN UP</center>
            </b>
          </h2>
          <form className="signin-form">
            <h4>Let's get started shall we...</h4>
            &nbsp;
            <div className="signin-input">
              <input type="text" placeholder="Username" />
              <FaRegUserCircle id="username-icon" />
            </div>
            &nbsp;
            <div className="signin-input">
              <input type="password" placeholder="Password" />
              <FaEyeSlash id="password-icon" />
            </div>
            &nbsp;
            {/* <div style={{ display: "flex", flex: "space-evenly" }}> */}
            <div
              style={{
                display: "flex",
              }}
            >
              <input type="checkbox" />
              <h6>
                {" "}
                I agree to the{" "}
                <a
                  href="https://www.google.com"
                  target="blank"
                  style={{ color: "red" }}
                >
                  terms & conditions
                </a>
              </h6>
            </div>
            &nbsp;
            <center>
              <button
                className="button_green_dark"
                onClick={() => {
                  register();
                }}
              >
                <b>Register</b>
                <div>
                  <FiUpload id="button-icon" />
                </div>
              </button>
              &nbsp;
            </center>
            <center>
              <h6>
                Already have an account?{" "}
                <a href="signin" style={{ color: "red" }}>
                  Sign in
                </a>{" "}
              </h6>
            </center>
          </form>
        </div>
        <div class="signup-image-card">
          <img src={SignupImage} alt="N/A" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
};

export default observer(SignUp);
