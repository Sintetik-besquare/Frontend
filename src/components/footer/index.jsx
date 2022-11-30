import React from "react";
import Info from "./info";
import Socials from "./socials";
import Form from "./form";
import App_Store from "./app-store";
import Logo from "../../assets/logo-sintetik.png";


export const Footer = () => {
  return (
    <div className="footer" style={{ background: "black", color: "white" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" style={{ width: "10%" }} />
        <div>
          <h1>SINTETIK</h1>
          <p>The Right Way of Trading</p>
        </div>
      </div>
      <div className="flex-block footer-flex">
        <div>
          <Info />
        </div>
        <div>
          <Socials />
        </div>
        <div>
          <App_Store />
        </div>
      </div>
    </div>
  );
};

export default Footer;
