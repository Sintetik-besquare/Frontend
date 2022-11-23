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

  let error_message = [];

  useEffect(() => {
    loginPromise
      ?.then((z) => {
        if (typeof z === "string") {
          app_store.setAccessToken(z);
          navigate("/trade", { replace: true });
        } else {
          z.forEach((e) => {
            error_message.push(e.msg);
          });
          alert(error_message.join("\n \n"));
        }
      })
      .then(
        getBalance().then((e) => {
          chart_store.setWallet(e);
        })
      );
    error_message = [];
  }, [app_store, loginPromise]);

  return (
    <div id="signin-background">
      <div id="signin">
        <div className="signin-image-card">
          <img src={MobileLogin} alt="N/A" style={{ width: "90%" }} />
        </div>
        <div className="signin-details-card">
          <h2>
            <b>
              <center>SIGN IN</center>
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
              setLoginPromise(
                performSignin(
                  form.elements["username"].value,
                  form.elements["password"].value
                )
              );
            }}
          >
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
            </h4>
            &nbsp;
            <div className="signin-input">
              <input
                type="text"
                placeholder="Username"
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
            <h5>Forgot password?</h5>
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
