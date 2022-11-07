// import Logo from "../../../assets/logo-sintetik.jpg";
import MobileLogin from "../../../assets/Mobile login-cuate 1.svg";
import { FaUserCircle, FaEyeSlash } from "react-icons/fa";


function SigninPage() {
  return (
    <div id="signin">
        <div class="signin-card" style={{backgroundColor:"rgba(56, 56, 56, 1)"}}>
            <img src={MobileLogin} alt='N/A'/>
        </div>
        <div class="signin-card" style={{backgroundColor:"rgba(29, 29, 29, 1)"}}>
            <p style={{color:"white", alignContent:"center"}}><h2><b><center>SIGN IN</center></b></h2></p>
                <form>
                <p style={{color: "yellow"}}>Welcome back!<br/>Good to see you again.
                </p>
                    <div className="input">
                        <input type="text" placeholder="Username" />
                        <FaUserCircle />
                    </div>
                    &nbsp;
                    <div className="input">
                        <input type="text" placeholder="Password" />
                        <FaEyeSlash />
                    </div>
                    <p style={{color: "red"}}>Forgot password?</p>
                    &nbsp;
                    <center><button className="button-orange">Log In</button></center>
                        <center><p style={{color: "white", flexBasis:"49.5%"}}>Need an account? <a href='https://www.google.com'>Create one here</a> </p></center>
                </form>
        </div>
    </div>
  );
}

export default SigninPage;
