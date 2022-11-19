import React from "react";
import moment from "moment/moment";

const NewsItem = ({ title, date, description, url, urlToImage }) => {
  const unfoundImage = "https://static.thenounproject.com/png/340719-200.png";

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="news-card-styles"
      >
        <div className="card">
          <img src={urlToImage || unfoundImage} alt={urlToImage} />
          <div>
            <b className="card-news-title">
              {title.length > 85 ? `${title.substring(0, 70)}...` : title}
            </b>
            <p className="card-news-paragraph">
              {description.length > 100
                ? `${description.substring(0, 75)}...`
                : description}
            </p>
            <p className="card-news-minute">
              {date.length > 10
                ? `${moment(date).startOf("hh").fromNow()}`
                : date}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default NewsItem;
