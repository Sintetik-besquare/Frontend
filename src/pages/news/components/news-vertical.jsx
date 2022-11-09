import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./news-items";
import { NewsContainerGridStyled } from "./scratch/newsCardStyle";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const headline = "everything";
    const q = "economy";
    const language = "en";
    const APIKEY = process.env.REACT_APP_NEWS_API_KEY;
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/${headline}?q=${q}&language?=${language}&apiKey=${APIKEY}`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);

  const [cardsAvailable, setCardsAvailable] = useState(8);
  const showMoreCards = () => {
    setCardsAvailable((preValue) => preValue + 3);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        {articles?.map((article) => {
          return (
            <>
              <NewsContainerGridStyled>
                {articles
                  .slice()
                  .sort(function (a, b) {
                    return (
                      new Date(b.datePublished) - new Date(a.datePublished)
                    );
                  })
                  .slice(0, cardsAvailable)
                  .map((article) => (
                    <NewsItem
                      title={article.title}
                      date={article.publishedAt}
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage}
                    />
                  ))}
              </NewsContainerGridStyled>
            </>
          );
        })}
      </div>
    </>
  );
};

export default NewsList;
