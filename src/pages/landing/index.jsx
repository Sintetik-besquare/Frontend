import React from "react";
import Hero from "./components/hero";
import CoreValues from "./components/core-values";
import MeetOurTeam from "./components/meet-our-team";
import OurCompany from "./components/our-company";
import Graph from "../../assets/graph_grey.png";

export const Index = () => {
  return (
    <div>
      <div
      >
        <div className="homepage-top-half">
          <Hero />
          <div className="image2 hide-when-small">
            <img src={Graph} altpo="Logo" id="graphic_crypto2"/>
          </div>
          <OurCompany />
        </div>
        <CoreValues />
        <MeetOurTeam />
      </div>
    </div>
  );
};

export default Index;
