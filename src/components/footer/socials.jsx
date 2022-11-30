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
      <div style={{marginTop:"1em", color:"dimgrey"}}>
        <FaInstagram />
        <FaLinkedin />
        <FaTwitterSquare />
        <FaTelegramPlane />
        <FaFacebookSquare />
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
