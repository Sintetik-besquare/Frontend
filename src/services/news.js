import axios from "axios";

const getNews = () => {
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "economy",
      count: "30",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  return axios.request(options);
};

export default getNews;
