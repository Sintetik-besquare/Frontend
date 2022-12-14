import React from "react";
import moment from "moment/moment";

const HorizontalNewsItem = ({ title, date, description, url, urlToImage }) => {
  const unfoundImage = "https://static.thenounproject.com/png/340719-200.png";

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="news-card-styles horizontal-card"
        aos-
      >
        <div className="card">
          <img src={urlToImage || unfoundImage} alt={urlToImage} />
          <div className="card-news-details">
            <b className="card-news-title">
              {title.length > 85 ? `${title.substring(0, 40)}...` : title}
            </b>
            <p className="card-news-paragraph">
              {description.length > 120
                ? `${description.substring(0, 100)}...`
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

export default HorizontalNewsItem;
