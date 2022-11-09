import React from "react";

const NewsItem = ({ title, date, description, url, urlToImage }) => {
  const unfoundImage = "https://static.thenounproject.com/png/340719-200.png";

  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="card">
          <img src={urlToImage || unfoundImage} alt={urlToImage} />
          <div>
            <b className="card-news-title">{title}</b>
            <p className="card-news-paragraph">{description}</p>
            <p className="card-news-minute">{date}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default NewsItem;
