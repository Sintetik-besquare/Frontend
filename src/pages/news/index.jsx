import React from "react";
import Hero from "./components/hero";
import HorizontalCard from "./components/scratch/horizontal-card";
import NewsList from "./components/news-vertical";
import Footer from "../../components/footer";

export const Index = () => {
  return (
    <>
      <div className="news-page-background">
        <Hero />
        <div data-aos="zoom-in" data-aos-duration="2000">
          <NewsList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
