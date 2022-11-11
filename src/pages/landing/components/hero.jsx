import Crypto from "../../../assets/uwu.png";
import { CgArrowTopRight } from "react-icons/cg";

function Hero() {
  return (
    <div id="home">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="flex-block">
        <div id="title" data-aos="fade-right">
          <span style={{ fontSize: "45px", WebkitTextFillColor: "#F5DC0C" }}>
            SINTETIK
          </span>
          <br />
          <br />
          <span style={{ fontSize: "80px", WebkitTextFillColor: "#FFF" }}>
            It Just Gets Better and Better.
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "25px",
              WebkitTextFillColor: "#2c99ff",
              lineHeight: "10px",
            }}
          >
            Trade forex, synthetics, stocks & indices, cryptocurrencies, basket
            indices, and commodities.
          </span>
          <br />
          <br />
          <br />
          <button
            style={{
              fontSize: "20px",
              backgroundColor: "#F5DC0C",
              WebkitTextFillColor: "#000",
            }}
          >
            <b>Get Started</b> &nbsp;
            <CgArrowTopRight id="button-icon2" />
          </button>
        </div>
        <div className="landing_hero_graphics" data-aos="fade-up">
          {/* <img src={Desktop} alt="Logo" id="graphic_desktop" /> */}
          <img src={Crypto} alt="Logo" id="graphic_crypto" />
          {/* <img src={Laptop} alt="Logo" id="graphic_laptop" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
