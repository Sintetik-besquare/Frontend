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
          <p>Trade Synthetics with</p>
          <b>
            <div className="innerTradewith">
              Vol 20
              <br />
              Vol 40
              <br />
              Vol 60
              <br />
              Vol 80
              <br />
              Vol 100
            </div>
          </b>
        </div>
        <br className="hide-when-small" />
        <br />
        <br />
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
      </div>
    </div>
  );
}

export default Hero;
