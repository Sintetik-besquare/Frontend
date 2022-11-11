import Crypto2 from "../../../assets/spacemen.png";

function OurCompany() {
  return (
    <div id="company">
      <h1 className="valign-text-middle poppins-bold-white-40px2 aboutus">
        ABOUT US
      </h1>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span className="image2" data-aos="fade-left">
            <img src={Crypto2} alt="Logo" id="graphic_crypto2" />
          </span>
          <h2
            className="sintetik-is-one-of-t poppins-bold-white-40px-22"
            data-aos="fade-up"
          >
            <span
              style={{ color: "#FFF", fontSize: "60px" }}
              className="poppins-bold-white-40px2"
            >
              SINTETIK
            </span>
            &nbsp;
            <span className="poppins-normal-pink-swan-20px">
              is one of the world's largest online brokers. We offer CFDs and
              other derivatives on forex, indices, cryptocurrencies,
              commodities, and synthetics to millions of registered users across
              the globe.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default OurCompany;