import React from "react";
import Info from "./info";
import Socials from "./socials";
import Form from "./form";

export const Footer = () => {
  return (
    <div>
      <hr />
      <h1>Footer</h1>
      <footer>
        <span>
          <Info />
        </span>
        <span>
          <Socials />
        </span>
        <span>
          <Form />
        </span>
      </footer>
    </div>
  );
};

export default Footer;
