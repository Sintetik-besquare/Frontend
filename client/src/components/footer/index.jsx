import React from "react";
import Info from "./info";
import Socials from "./socials";
import Form from "./form";

export const Footer = () => {
  return (
    <div style={{ background: "black", color: "white" }}>
      <div className="flex">
        <div style={{ width: "30%" }}>
          <Info />
        </div>
        <div style={{ width: "30%" }}>
          <Socials />
        </div>
        <div style={{ width: "30%" }}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Footer;
