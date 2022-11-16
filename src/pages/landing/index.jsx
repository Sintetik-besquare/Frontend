import React from "react";
import Hero from "./components/hero";
import MeetOurTeam from "./components/meet-our-team";
import OurCompany from "./components/our-company";
import Footer from "../../components/footer";

export const Index = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(34, 33, 40, 1), rgba(200, 200, 200, 1))",
        }}
      >
        <Hero />
        <OurCompany />
        <MeetOurTeam />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
