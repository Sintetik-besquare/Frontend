import Logo from "../../../assets/logo-sintetik.jpg";
import Crypto from "../../../assets/crypto-graphics.png";
import Desktop from "../../../assets/desktop-charts.png";

function Hero() {
  return (
    <div id="home">
      <div >
        <img src={Logo} alt="Logo"/>
        <h1>SINTETIK</h1>
        <b>The Right Way Of Trading</b>
        <p>
          Trade forex, synthetics, stocks & indices, cryptocurrencies, basket
          indices, and commodities.
        </p>
        <button>SIGN UP</button>
        <button>SIGN IN</button>
      </div>
      <div>
        <img src={Crypto} alt="Logo"/>
        <img src={Desktop} alt="Logo"/>
      </div>
    </div>
  );
}

export default Hero;
