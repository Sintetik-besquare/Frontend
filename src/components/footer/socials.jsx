import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaTelegramPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdLocationPin, MdEmail } from "react-icons/md";

function Socials() {
  return (
    <div style={{ textAlign: "center" }}>
        <b style={{textDecoration: "underline yellow", fontSize:"1.5rem"}}>Find us</b>
      <div className="footer-socials-icons">
        <FaInstagram style={{margin:"0 1rem"}} />
        <FaLinkedin style={{margin:"0 1rem"}} />
        <FaTwitterSquare style={{margin:"0 1rem"}} />
        <FaTelegramPlane style={{margin:"0 1rem"}} />
        <FaFacebookSquare style={{margin:"0 1rem"}} />
      </div>

      <p style={{color:"dimgrey"}}>
        <FaPhoneAlt /> 0123456789
      </p>
      <p style={{color:"dimgrey"}}>
        <MdEmail /> sintetik.my@gmail.com
      </p>
      <p style={{color:"dimgrey"}}>
        <MdLocationPin /> 10th Floor, Block C Megan Avenue 1 189 Jalan Tun
        Razak, Kuala Lumpur
      </p>
    </div>
  );
}

export default Socials;
