import React from "react";
import Hero from "./components/hero";
import MeetOurTeam from "./components/meet-our-team";
import OurCompany from "./components/our-company";
import Crypto2 from "../../assets/graph_grey.png";

export const Index = () => {
  return (
    <div>
      <div
      >
        <div className="homepage-top-half">
          <Hero />
          <span className="image2 hide-when-small">
            <img src={Crypto2} altpo="Logo" id="graphic_crypto2" />
          </span>
          <OurCompany />
        </div>
        <MeetOurTeam />
      </div>
    </div>
  );
};

export default Index;
