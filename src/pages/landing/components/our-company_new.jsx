import Graph from "../../../assets/graph_grey.png";
import Crypto2 from "../../../assets/spacemen.png";

function OurCompany() {
  return (
    <div id="company">
      <div className="homepage-image, hide-when-small" data-aos="fade-up">
        <img src={Graph} altpo="Logo" id="graphic_crypto2" />
      </div>
      <div className="about-us-container" style={{width:"120vw", padding:"3rem"}}>
        <h1
          className="aboutus"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          ABOUT US
        </h1>
        <div className="homepage-image, hide-when-big" data-aos="fade-right">
        <img src={Graph} altpo="Logo" id="graphic_crypto2" />
      </div>
        <h2 className="aboutus-text" data-aos="fade-up">
          SINTETIK is a website based off of its parent company Deriv.com 
          as we offer clients the opportunity to trade with synthetic indices.
          By providing risk-free demo accounts, users can obtain 
          valuable experience on synthetics along the way.
        </h2>
      </div>
    </div>
  );
}

export default OurCompany;
