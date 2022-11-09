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
      <p>
        <b>Find us</b>
      </p>
      <div className="">
        <FaInstagram />
        <FaLinkedin />
        <FaTwitterSquare />
        <FaTelegramPlane />
        <FaFacebookSquare />
      </div>

      <p>
        <FaPhoneAlt /> 0123456789
      </p>
      <p>
        <MdEmail /> sintetik.my@gmail.com
      </p>
      <p>
        <MdLocationPin /> 10th Floor, Block C Megan Avenue 1 189 Jalan Tun
        Razak, Kuala Lumpur
      </p>
    </div>
  );
}

export default Socials;
