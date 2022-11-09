// import Logo from "../../../assets/logo-sintetik.png";
import Crypto from "../../../assets/crypto-graphics.png";
import Desktop from "../../../assets/desktop-charts.png";
import Laptop from "../../../assets/laptop.png";

function Hero() {
  return (
    <div id="home">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="flex-block">
        <div id="title">
          <span style={{ fontSize: "100px", WebkitTextFillColor: "#FFF" }}>
            SINTETIK
          </span>
          <br />
          <br />
          <span style={{ fontSize: "35px", WebkitTextFillColor: "#F5DC0C" }}>
            The Right Way Of Trading
          </span>
          <br />
          <br />
          <span style={{ fontSize: "23px" }}>
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
          ><b>Get Started</b>
          </button>
        </div>
        <div className="landing_hero_graphics">
          <img src={Desktop} alt="Logo" id="graphic_desktop" />
          <img src={Crypto} alt="Logo" id="graphic_crypto" />
          <img src={Laptop} alt="Logo" id="graphic_laptop" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
