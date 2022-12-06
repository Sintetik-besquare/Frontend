import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";
import MobileLogin from "../../assets/Mobile login-cuate 1.svg";
import { FaRegUserCircle, FaEyeSlash, FaEye } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { performSignin } from "../../services/auth";
import { getBalance } from "../../services/wallet";

const SigninPage = () => {
  const navigate = useNavigate();
  const { app_store, chart_store } = useStores();
  const [loginPromise, setLoginPromise] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    loginPromise
      ?.then((z) => {
        if (typeof z === "string") {
          app_store.setAccessToken(z);
          navigate("/trade", { replace: true });
        } else {
          app_store.error_messages = [];
          z.forEach((e) => {
            app_store.error_messages.push(e.msg);
          });
          app_store.show_error_message=true;
        }
      })
      .then(
        getBalance().then((e) => {
          chart_store.setWallet(e);
        })
      );
  }, [app_store, loginPromise]);

  return (
    <div className="signin-background">
      <div id="signin" data-aos="flip-left" data-aos-duration="1000">
        <div className="signin-image-card">
          <img src={MobileLogin} alt="N/A" style={{ width: "90%" }} />
        </div>
        <div className="signin-details-card">
          <h1>SIGN IN</h1>
          <form
            className="signin-form"
            onSubmit={function (e) {
              e.preventDefault();
              /**
               * @type {HTMLFormElement}
               */
              const form = e.nativeEvent.target;
              setLoginPromise(
                performSignin(
                  form.elements["username"].value,
                  form.elements["password"].value
                )
              );
            }}
          >
            <h4>
              Welcome back!
              <br />
              Good to see you again.
            </h4>
            &nbsp;
            <div className="signin-input">
              <input
                type="text"
                placeholder="Email"
                name="username"
                id="uname-input"
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
                id="pw-input"
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
            <h5
              // onClick={() => navigate("/forgotpw", { replace: true })}
              style={{ cursor: "pointer" }}
            >
              Forgot password?
            </h5>
            &nbsp;
            <center>
              {username === "" || password === "" ? (
                <>
                  <button
                    style={{ backgroundColor: "black", color: "gray" }}
                    disabled
                  >
                    <b>Log In</b>
                    <div>
                      <BiExit id="button-icon" />
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <button className="form_row button_green_dark" name="submit">
                    <b>Log In</b>
                    <div>
                      <BiExit id="button-icon" />
                    </div>
                  </button>
                </>
              )}
              &nbsp;
            </center>
            <center>
              <h6>
                Need an account?
                <p
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => navigate("/signup", { replace: true })}
                >
                  Create one here
                </p>
              </h6>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default observer(SigninPage);
