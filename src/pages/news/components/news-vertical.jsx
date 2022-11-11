import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./news-items";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  //Get every related news
  useEffect(() => {
    const headline = "everything";
    const q = "economy";
    const language = "en";
    const pageSize = "20";
    const APIKEY = process.env.REACT_APP_NEWS_API_KEY;
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/${headline}?q=${q}&pageSize?=${pageSize}&language?=${language}&apiKey=${APIKEY}`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);

  const [cardsAvailable, setCardsAvailable] = useState(9);
  const showMoreCards = () => {
    setCardsAvailable((defaultCards) => defaultCards + 3);
  };

  return (
    <>
      <div className="news-container">
        <div className="news-container-grid">
          {articles
            .slice()
            .sort(function (a, b) {
              return new Date(b.publishedAt) - new Date(a.publishedAt);
            })
            .slice(0, cardsAvailable)
            .map((article, i) => (
              <NewsItem
                title={article.title}
                date={article.publishedAt}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                key={i}
              />
            ))}
        </div>
      </div>
      <button onClick={showMoreCards} className="news-load-btn button-40">
        View More
      </button>
    </>
  );
};

export default NewsList;