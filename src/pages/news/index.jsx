import React from "react";
import Hero from "./components/hero";
import HorizontalCard from "./components/horizontal-card";
import NewsList from "./components/news-vertical";

export const Index = () => {
  return (
    <>
      <div className="news-page-background">
        <Hero />
        <div data-aos="zoom-in" data-aos-duration="2000">
          <HorizontalCard />
          <NewsList />
        </div>
      </div>
    </>
  );
};

export default Index;
