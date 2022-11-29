import React from "react";
import Info from "./info";
import Socials from "./socials";
import Form from "./form";
import App_Store from "./app-store";

export const Footer = () => {
  return (
    <div className="footer" style={{ background: "black", color: "white" }}>
      <div className="flex-block">
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
