import React from "react";
import Info from "./info";
import Socials from "./socials";
import Form from "./form";
import App_Store from "./app-store";


export const Footer = () => {
  return (
    <div className="footer" style={{ background: "black", color: "white" }}>
      <div className="flex-block footer-flex">
        <div className="footer-info">
          <Info />
        </div>
        <div className="footer-socials">
          <Socials />
        </div>
        <div className="footer-apps-store">
          <App_Store />
        </div>
      </div>
    </div>
  );
};

export default Footer;
