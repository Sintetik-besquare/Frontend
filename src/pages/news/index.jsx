import React from "react";
import NewsList from "./components/news-vertical";
import Footer from "../../components/footer";

export const Index = () => {
  return (
    <>
      <div className="news-page-background">
        <h1 style={{textAlign:"center"}}>Latest News</h1>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <NewsList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
