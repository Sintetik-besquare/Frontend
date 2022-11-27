import Crypto from "../../../assets/uwu.png";
import { CgArrowTopRight } from "react-icons/cg";
import Sand from "../../../assets/cyberspace_gray.mp4";

function Hero() {
  return (
    <div className="hero-home" style={{backgroundColor:"black", position: "relative" }}>
      {/* <video autoPlay loop muted className="hero-video">
          <source src={Sand} type="video/mp4" />
        </video> */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div
        className="hero-title"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <span className="homepage-title">SINTETIK</span>
        <br />
        <br />
        <span
          className="homepage-heading2"
          style={{ WebkitTextFillColor: "#FFF" }}
        >
          It Just Gets Better and Better
        </span>
        <br />
        <div className="Tradewith">
          <p>What Our Users Say About Us</p>
          <b>
            <div className="innerTradewith">
              Enjoyable
              <br />
              Exemplary
              <br />
              Exquisite
              <br />
              Excellent
              <br />
              Exceptional
            </div>
          </b>
        </div>
        <br className="hide-when-small" />
        <br />
        <br />
        <a href="trade">
        <button
          className="get-started-button"
          style={{
            // backgroundColor: "#F5DC0C",
            WebkitTextFillColor: "#000",
          }}
          >
          <b>Get Started</b> &nbsp;
          <CgArrowTopRight id="button-icon2" />
        </button>
          </a>
      </div>
    </div>
  );
}

export default Hero;
