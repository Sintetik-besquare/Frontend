import React from "react";
import Info from "./info";
import Socials from "./socials";
import Form from "./form";
import AppStore from "./app-store";
import Logo from "../../assets/logo-sintetik.png";


export const Footer = () => {
  return (
    <div className="footer">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" style={{ width: "5%" }} />
        <div>
          <h1 style={{margin:0}}>SINTETIK</h1>
          <p  style={{margin:0}}>The Right Way of Trading</p>
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
          <AppStore />
        </div>
      </div>
    </div>
  );
};

export default Footer;
