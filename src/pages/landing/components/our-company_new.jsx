import Crypto2 from "../../../assets/spacemen.png";

function OurCompany() {
  return (
    <div id="company">
      <div style={{paddingRight:"3rem"}}>
      <h1 className="homepage-headline aboutus" 
            data-aos="fade-right">
        ABOUT US
      </h1>
      </div>
          <h2
            className="aboutus-text"
            data-aos="fade-up"
          >
            <span className="aboutus-text2">
              SINTETIK is one of the world's largest online brokers. We offer CFDs and
              other derivatives on forex, indices, cryptocurrencies,
              commodities, and synthetics to millions of registered users across
              the globe.
            </span>
          </h2>
    </div>
  );
}

export default OurCompany;