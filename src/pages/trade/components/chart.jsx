import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import io from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStores } from "../../../store";

import { getHistoricalFeed } from "../../../services/historical-feed";

const Chart = () => {
  const socket = io.connect("http://localhost:3002");
  const { chart_store } = useStores();
  const [history, setHistory] = React.useState(chart_store.historical_price);
  const [stream, setStream] = React.useState([]);

  // fetch 10 latest stream on Mount from endpoint
  useEffect(() => {
    getHistoricalFeed().then(setHistory);
    chart_store.updateHistory(history);
  }, []);

  // fetch subsequent emits from socket
  useEffect(() => {
    socket.on("getfeed", (price) => {
      console.log(price);
    });
  }, []);

  return (
    <div>
      <h1 style={{color:'black'}}>Chart</h1>
      <h4>useState.history:</h4> {history}
        <h4>chart_store.historical_price:</h4> {chart_store.historical_price}
    </div>
  );
};

export default observer(Chart);
