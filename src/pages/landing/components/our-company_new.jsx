import Graph from "../../../assets/graph_grey.png";
import Crypto2 from "../../../assets/spacemen.png";

function OurCompany() {
  return (
    <div id="company">
      <div className="homepage-image, hide-when-small" data-aos="fade-right">
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
            SINTETIK is one of the world's largest online brokers. We offer CFDs
            and other derivatives on forex, indices, cryptocurrencies,
            commodities, and synthetics to millions of registered users across
            the globe.
        </h2>
      </div>
    </div>
  );
}

export default OurCompany;
