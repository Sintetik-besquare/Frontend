import React from "react";
import moment from "moment";
import { NewsCardStyled } from "../../../styles/News.styled";

const NewCard = ({ news }) => {
  const demoImage = "https://static.thenounproject.com/png/340719-200.png";
  return (
    <NewsCardStyled>
      <a href={news.url} target="_blank" rel="noreferrer">
        <div className="news-header">
          <img
            className="news-img"
            src={news?.image?.thumbnail?.contentUrl || demoImage}
            alt="crypto-news"
          />
          <div className="news-title">
            <strong>
              {news.name.length > 85
                ? `${news.name.substring(0, 85)}...`
                : news.name}
            </strong>
          </div>
        </div>
        <div className="news-description">
          <p>
            {news.description.length > 100
              ? `${news.description.substring(0, 100)}...`
              : news.description}
          </p>
        </div>
        <div className="provider-container">
          <div className="provider-align">
            <img
              className="provider-img"
              src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
              alt="news-provider"
            />
            <div className="provider-name">
              <p>{news.provider[0]?.name}</p>
            </div>
          </div>
          <div className="provider-date">
            <p>{moment(news.datePublished).startOf("ss").fromNow()}</p>
          </div>
        </div>
      </a>
    </NewsCardStyled>
  );
};

export default NewCard;
