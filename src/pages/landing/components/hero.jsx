import Logo from "../../../assets/logo-sintetik.png";
import Crypto from "../../../assets/crypto-graphics.png";
import Desktop from "../../../assets/desktop-charts.png";

function Hero() {
  return (
    <div id="home">
      <div className="flex-block landing_hero_logo">
        <div>
          <img src={Logo} alt="Logo" style={{ width: "50%" }} />
          <h1>SINTETIK</h1>
          <b>The Right Way Of Trading</b>
          <p>
            Trade forex, synthetics, stocks & indices, cryptocurrencies, basket
            indices, and commodities.
          </p>
        </div>
        <div className="landing_hero_graphics">
          <img src={Desktop} alt="Logo" id="graphic_desktop" />
          <img src={Crypto} alt="Logo" id="graphic_crypto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
