import React, { useState, useEffect } from "react";
import HorizontalNewsItem from "./horizontal-news-item";
import getNews from "../../../../services/news";

const HorizontalCard = () => {
  const [topheadlines, setTopheadline] = useState([]);
  useEffect(() => {
    getNews().then((e) => setTopheadline(e.data.value));
  }, []);

  console.log("topheadline", topheadlines);

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
    </>
  );
};
export default HorizontalCard;
