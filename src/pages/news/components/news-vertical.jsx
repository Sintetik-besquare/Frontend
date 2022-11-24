import React, { useState, useEffect } from "react";
import NewsItem from "./news-items";
import HorizontalNewsItem from "./scratch/horizontal-news-item";
import getNews from "../../../services/news";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [topheadlines, setTopheadline] = useState([]);

  //Horizontal card
  useEffect(() => {
    getNews().then((e) => setTopheadline(e.data.value));
  }, []);

  // console.log("topheadline", topheadlines);

  //Get every related news
  useEffect(() => {
    console.log("asdas");
    getNews().then((e) => setArticles(e.data.value));
  }, []);

  console.log("articles", articles);

  const [cardsAvailable, setCardsAvailable] = useState(9);
  const showMoreCards = () => {
    setCardsAvailable((defaultCards) => defaultCards + 3);
  };

  if (!articles && !topheadlines) return <h1>Loading..</h1>;

  return (
    <>
      <div className="news-container">
        <div className="news-container-grid">
          {topheadlines
            ?.slice()
            .slice(0, 1)
            .map((topheadline, i) => (
              <HorizontalNewsItem
                title={topheadline.name}
                date={topheadline.datePublished}
                description={topheadline.description}
                url={topheadline.url}
                urlToImage={topheadline.image.thumbnail.contentUrl}
                key={i}
              />
            ))}
        </div>
      </div>
      <div className="news-container">
        <div className="news-container-grid">
          {articles
            .slice(1)
            .sort(function (a, b) {
              return new Date(b.publishedAt) - new Date(a.publishedAt);
            })
            .slice(0, cardsAvailable)
            .map((article, i) => (
              <NewsItem
                title={article.name}
                date={article.datePublished}
                description={article.description}
                url={article.url}
                urlToImage={article.image.thumbnail.contentUrl}
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
