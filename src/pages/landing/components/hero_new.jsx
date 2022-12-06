import Crypto from "../../../assets/uwu.png";
import { CgArrowTopRight } from "react-icons/cg";
import Sand from "../../../assets/cyberspace_gray.mp4";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div
      className="hero-home"
      style={{ backgroundColor: "black", position: "relative" }}
    >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div
        className="hero-title"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className="homepage-title">SINTETIK</h1>
        <div>
        <span>A New Way of Trading</span>
        <br />
        <div className="Tradewith">
          <b>
            <div className="innerTradewith">
              "Exciting"
              <br />
              "Exemplary"
              <br />
              "Exquisite"
              <br />
              "Excellent"
              <br />
              "Exceptional"
            </div>
          </b>
        </div>
        </div>
        <br />
        <br />
        <button
          className="get-started-button"
          onClick={() => navigate("/trade", { replace: true })}
        >
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <b className="home-hero-button">Get Started</b> &nbsp;
          <CgArrowTopRight id="button-icon2" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
