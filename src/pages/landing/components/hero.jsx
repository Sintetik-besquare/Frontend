import Crypto from "../../../assets/uwu.png";
import { CgArrowTopRight } from "react-icons/cg";

function Hero() {
  return (
    <div id="home">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="flex-block hero-page-flex-block">
        <div className="landing_hero_graphics hide-when-big">
          <img src={Crypto} alt="Logo" id="graphic_crypto" />
        </div>
        <div id="title" data-aos="fade-right">
          <span
            className="homepage-title"
            style={{ WebkitTextFillColor: "#F5DC0C" }}
          >
            SINTETIK
          </span>
          <br />
          <br />
          <span
            className="homepage-heading2"
            style={{ WebkitTextFillColor: "#FFF" }}
          >
            It Just Gets Better and Better
          </span>
          <br />
          <span
            style={{
              fontSize: "25px",
              lineHeight: "10px",
            }}
          >
            Trade forex, synthetics, stocks & indices, cryptocurrencies, basket
            indices, and commodities.
          </span>
          <br className="hide-when-small" />
          <br />
          <br />
          <button
            className="get-started-button"
            style={{
              backgroundColor: "#F5DC0C",
              WebkitTextFillColor: "#000",
            }}
          >
            <b>Get Started</b> &nbsp;
            <CgArrowTopRight id="button-icon2" />
          </button>
        </div>
        <div className="landing_hero_graphics hide-when-small" data-aos="fade-up">
          <img src={Crypto} alt="Logo" id="graphic_crypto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
