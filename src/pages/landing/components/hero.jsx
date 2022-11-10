// import Logo from "../../../assets/logo-sintetik.png";
import Crypto from "../../../assets/uwu.png";
// import bird from "../../../assets/bird-dance.gif";
import Desktop from "../../../assets/desktop-charts.png";
import Laptop from "../../../assets/laptop.png";

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
          <span style={{ fontSize: "80px", WebkitTextFillColor: "#FFF" }}>
            It Just Gets Better and Better
          </span>
          <br />
          <span style={{ fontSize: "25px", WebkitTextFillColor: "#2c99ff" }}>
            Trade forex, synthetics, stocks & indices, cryptocurrencies, basket
            indices, and commodities.
          </span>
          <br />
          <br />
          <button
            style={{
              fontSize: "20px",
              backgroundColor: "#F5DC0C",
              WebkitTextFillColor: "#000",
            }}
          >
            <b>Get Started</b>
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
