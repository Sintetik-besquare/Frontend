import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalNewsItem from "./horizontal-news-item";

const HorizontalCard = () => {
  const [topheadlines, setTopheadline] = useState([]);

  //Get top headline
  useEffect(() => {
    const APIKEY = process.env.REACT_APP_NEWS_API_KEY;
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=economy&apiKey=${APIKEY}`
      );
      setTopheadline(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);

  if (!topheadlines) return <h1>Loading..</h1>;

  return (
    <>
      <div className="news-container">
        <div className="news-container-grid">
          {topheadlines
            ?.slice()
            .slice(0, 1)
            .map((topheadline, i) => (
              <HorizontalNewsItem
                title={topheadline.title}
                date={topheadline.publishedAt}
                description={topheadline.description}
                url={topheadline.url}
                urlToImage={topheadline.urlToImage}
                key={i}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default HorizontalCard;
