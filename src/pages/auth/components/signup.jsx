import SignupImage from "../../../assets/Sign up-cuate (1) 1.svg";
import { FaRegUserCircle, FaEyeSlash } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

function SignUp() {
  return (
    <div id="signup">
      <div
        class="signin-details-card"
        style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}
      >
        <p style={{ color: "white", alignContent: "center" }}>
          <h2>
            <b>
              <center>SIGN UP</center>
            </b>
          </h2>
        </p>
        <form>
          <p style={{ color: "yellow", fontSize: "20" }}>
            Let's get started shall we...
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
          &nbsp;
          <div style={{ display: "flex", flex: "space-evenly" }}>
            <input type="checkbox" />
            <p style={{ color: "white", fontSize: "15px" }}>
              I agree to the{" "}
              <a href="https://www.google.com" target="blank">
                terms & conditions
              </a>
            </p>
          </div>
          &nbsp;
          <center>
            <button className="square-button">
              <b>Register</b>
              <div>
                <FiUpload
                  style={{
                    fontSize: "20px",
                  }}
                />
              </div>
            </button>
            &nbsp;
          </center>
          <center>
            <p style={{ color: "white", flexBasis: "49.5%" }}>
              Already have an account?{" "}
              <a href="https://www.google.com">Sign in</a>{" "}
            </p>
          </center>
        </form>
      </div>
      <div
        class="signin-image-card"
        style={{
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <img src={SignupImage} alt="N/A" />
      </div>
    </div>
  );
}

export default SignUp;
