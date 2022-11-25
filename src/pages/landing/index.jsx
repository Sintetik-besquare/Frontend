import React from "react";
import Hero from "./components/hero_new";
import CoreValues from "./components/core-values";
import MeetOurTeam from "./components/meet-our-team_new";
import OurCompany from "./components/our-company_new";
import Footer from "../../components/footer";

export const Index = () => {
  return (
    <div>
      <Hero />
      <OurCompany />
      <CoreValues />
      <MeetOurTeam />
      <Footer />
    </div>
  );
};

export default Index;
