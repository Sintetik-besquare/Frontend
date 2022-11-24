import axios from "axios";

const getNews = () => {
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "economy",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "cc30171aa7msh871f6210dccaf25p1ec94fjsnf0cbc71f9ca5",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  return axios.request(options);
};

export default getNews;
