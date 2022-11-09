import React from "react";
import Hero from "./components/hero";
import HorizontalCard from "./components/horizontal-card";
import NewsList from "./components/news-vertical";

export const Index = () => {
  return (
    <div>
      <Hero />
      <div className="padding-container-news">
        <HorizontalCard />
        <NewsList />
      </div>
    </div>
  );
};

export default Index;
