import React from "react";
import Info from "./info";
import Socials from "./socials";
import Form from "./form";

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
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Footer;
