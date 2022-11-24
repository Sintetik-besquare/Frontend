import Crypto from "../../../assets/uwu.png";
import { CgArrowTopRight } from "react-icons/cg";
import Sand from "../../../assets/cyberspace_gray.mp4";

function Hero() {
  return (
    <div className="hero-home">
      <div className="hero-page-flex-block">
        <video autoPlay loop muted className="hero-video">
          <source src={Sand} type="video/mp4" />
        </video>
        <div
          className="hero-title"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span
            className="homepage-title"
            // style={{ WebkitTextFillColor: "#F5DC0C" }}
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
          {/* <span
            className="homepage-heading3"
            // style={{ WebkitTextFillColor: "#2c99ff" }}
          >
            Trade forex, synthetics, stocks & indices, cryptocurrencies, basket
            indices, and commodities.
          </span> */}
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
    </div>
  );
}

export default Hero;
