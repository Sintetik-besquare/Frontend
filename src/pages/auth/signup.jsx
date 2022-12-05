import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";
import SignupImage from "../../assets/Sign up-cuate (1) 1.svg";
import { FaRegUserCircle, FaEyeSlash, FaEye } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { performSignup } from "../../services/auth";

const SignUp = () => {
  const { app_store } = useStores();
  const navigate = useNavigate();
  const [signupPromise, setSignupPromise] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);

  let error_message = [];

  useEffect(() => {
    signupPromise?.then((z) => {
      if (typeof z === "string") {
        app_store.setAccessToken(z);
        navigate("/trade", { replace: true });
      } else {
        z.forEach((e) => {
          error_message.push(e.msg);
        });
        alert(error_message.join("\n \n"));
      }
    });
    error_message = [];
  }, [app_store, signupPromise]);

  return (
    <div id="signup-background">
      <div id="signup" data-aos="flip-right" data-aos-duration="1000">
        <div className="signup-details-card">
          <h1>SIGN UP</h1>
          <form
            className="signin-form"
            onSubmit={function (e) {
              e.preventDefault();
              /**
               * @type {HTMLFormElement}
               */
              const form = e.nativeEvent.target;
              setSignupPromise(
                performSignup(
                  form.elements["username"].value,
                  form.elements["password"].value,
                  form.elements["password_confirm"].value
                )
              );
            }}
          >
            <h4>Let's get started shall we...</h4>
            &nbsp;
            <div className="signin-input">
              <input
                type="text"
                placeholder="Email"
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <FaRegUserCircle id="username-icon" />
            </div>
            &nbsp;
            <div className="signin-input">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {!passwordShown ? (
                <FaEyeSlash
                  id="password-icon"
                  onClick={() => {
                    setPasswordShown(true);
                  }}
                />
              ) : (
                <FaEye
                  id="password-icon"
                  onClick={() => {
                    setPasswordShown(false);
                  }}
                />
              )}
            </div>
            &nbsp;
            <div className="signin-input">
              <input
                type={passwordConfirmShown ? "text" : "password"}
                placeholder="Confirm Password"
                name="password_confirm"
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
              {!passwordConfirmShown ? (
                <FaEyeSlash
                  id="password-icon"
                  onClick={() => {
                    setPasswordConfirmShown(true);
                  }}
                />
              ) : (
                <FaEye
                  id="password-icon"
                  onClick={() => {
                    setPasswordConfirmShown(false);
                  }}
                />
              )}{" "}
            </div>
            &nbsp;
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="checkbox"
                onClick={() => {
                  setCheckbox(!checkbox);
                }}
              />
              <h6>
                I agree to the
                <a href="error" target="blank" style={{ color: "red" }}>
                  terms & conditions
                </a>
              </h6>
            </div>
            &nbsp;
            <center>
              {username === "" || password === "" || checkbox === false ? (
                <>
                  <button
                    style={{ backgroundColor: "black", color: "gray" }}
                    disabled
                  >
                    <b>Register</b>
                    <div>
                      <FiUpload id="button-icon" />
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <button className="form_row button_green_dark" name="submit">
                    <b>Register</b>
                    <div>
                      <FiUpload id="button-icon" />
                    </div>
                  </button>
                </>
              )}
              &nbsp;
            </center>
            <center>
              <h6>
                Already have an account?
                <p
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => navigate("/signin", { replace: true })}
                >
                  Sign in
                </p>
              </h6>
            </center>
          </form>
        </div>
        <div className="signup-image-card">
          <img src={SignupImage} alt="N/A" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
};

export default observer(SignUp);
