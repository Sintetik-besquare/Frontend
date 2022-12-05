import React, { useState, useEffect } from "react";
import { useStores } from "../../store";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import SignupImage from "../../assets/Sign up-cuate (1) 1.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { performSignup } from "../../services/auth";

const ForgotPassword = () => {
  const { app_store } = useStores();
  const navigate = useNavigate();

  const [signupPromise, setSignupPromise] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
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
  }, [signupPromise]);

  return (
    <div id="container-forgotPW">
      <div id="signup" data-aos="flip-right" data-aos-duration="1000">
        <div className="signup-details-card">
          <h2>
            <b>
              <center>RESET PASSWORD</center>
            </b>
          </h2>
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
            <h4>I knew you would forget...</h4>
            &nbsp;
            <div className="signin-input">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="New Password"
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
                placeholder="Confirm New Password"
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
            <center>
              {passwordConfirm === "" || password === "" ? (
                <>
                  <button
                    style={{ backgroundColor: "black", color: "gray" }}
                    disabled
                  >
                    <b>Reset Password</b>
                  </button>
                  <p
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => navigate("/signin", { replace: true })}
                  >
                    Sign in
                  </p>
                </>
              ) : (
                <>
                  <button className="form_row button_green_dark" name="submit">
                    <b>Reset Password</b>
                  </button>
                  <p
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => navigate("/signin", { replace: true })}
                  >
                    Sign in
                  </p>
                </>
              )}
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

export default observer(ForgotPassword);
