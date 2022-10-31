import React from "react";
import Info from "./info";
import Socials from "./socials";
import Form from "./form";

export const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <h1 style={{ textAlign: "center" }}>Footer</h1>
      <footer className="justify-around">
        <span className="w-30">
          <Info />
        </span>
        <span className="w-30">
          <Socials className="w-30" />
        </span>
        <span className="w-30">
          <Form className="w-30" />
        </span>
      </footer>

    </div>
  );
};

export default Footer;
