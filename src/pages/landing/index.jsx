import React from "react";
import Hero from "./components/hero_new";
import CoreValues from "./components/core-values";
import MeetOurTeam from "./components/meet-our-team_new";
import OurCompany from "./components/our-company_new";
import Graph from "../../assets/graph_grey.png";

export const Index = () => {
  return (
    <div>
      <div
      >
        <div className="homepage-top-half">
          <Hero />
          <div className="homepage-image hide-when-small">
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
