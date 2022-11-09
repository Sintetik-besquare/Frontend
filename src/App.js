import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import "./App.scss";
import io from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStores } from "./store";

import Nav from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./pages/landing/index.jsx";
import Trade from "./pages/trade/index.jsx";
import News from "./pages/news/index.jsx";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";

import { getHistoricalFeed } from "./services/historical-feed";

const App = () => {
  const socket = io.connect("http://localhost:3002");
  const { chart_store } = useStores();
  const [history, setHistory] = React.useState(chart_store.historical_price);

  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getHistoricalFeed().then(setHistory);
    // chart_store.historical_price = history
    chart_store.updateHistory(history)
  }, []);

  // To get price feed
  socket.on("getfeed", (price) => {
    // console.log(price);
  });

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <h4>useState.history:</h4> {history}
        <h4>chart_store.historical_price:</h4> {chart_store.historical_price}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<Landing />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/news" element={<News />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default observer(App);
