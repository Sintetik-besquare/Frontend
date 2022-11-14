import React from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";
import MobileLogin from "../../assets/Mobile login-cuate 1.svg";
import { FaRegUserCircle, FaEyeSlash } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { performLogin } from "../../services/backend";

const SigninPage = () => {
  const { app_store } = useStores();
  const navigate = useNavigate();
  const [loginPromise,setLoginPromise]=React.useState(null);
  React.useEffect(()=>{
    loginPromise?.then(z=>{
      app_store.setAccessToken(z);
      navigate("/trade", { replace: true });
    },e=>{
      console.error(e);
      alert("Login FAILED")
    })
  },[app_store,navigate,loginPromise]);

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
          <form className="signin-form" onSubmit={function(e){
            e.preventDefault();
            /**
             * @type {HTMLFormElement}
             */
            const form=e.nativeEvent.target;
            setLoginPromise(performLogin(form.elements['username'].value,form.elements['password'].value))
          }}>

            <h4
              style={{
                paddingLeft: "0rem",
                textAlign: "center",
                marginRight: "3rem",
              }}
            >
              Welcome back!
              <br />
              Good to see you again.
            </h4>{" "}
            &nbsp;
            <div className="signin-input">
              <input  type="text" placeholder="Username" name="username" id="uname-input" />
              <FaRegUserCircle id="username-icon" />
            </div>
            &nbsp;
            <div className="signin-input">
              <input type="password" placeholder="Password" name="password" id="pw-input" />
              <FaEyeSlash id="password-icon" />
            </div>
            &nbsp;
            <h5>Forgot password?</h5>
            &nbsp;
            <center>
              <button
              name="submit"
                className="button_green_dark"
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
