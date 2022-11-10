import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import io from "socket.io-client";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";

import { getHistoricalFeed } from "../../../services/historical-feed";

const LineChart = () => {
  const { chart_store } = useStores();
  const [history, setHistory] = React.useState(chart_store.historical_price);
  
  const chart_name = "Volatility 10";
  chart_store.index=chart_name;

  const [x_axis, setX_axis] = React.useState([]);
  const [y_axis, setY_axis] = React.useState([]);
  const data = {
    labels: x_axis,
    datasets: [
      {
        label: chart_name,
        backgroundColor: "yellow",
        borderColor: "black",
        data: y_axis,
      },
    ],
  };

  // fetch historical feed ONCE
  useEffect(() => {
    getHistoricalFeed().then(setHistory);
    history.map((d) => {
      y_axis.push(d[1][1]);
      x_axis.push(d[1][3]);
    });
  }, []);

  // fetch subsequent feed from socket emits
  useEffect(() => {
    const socket = io.connect("http://localhost:3002");
    socket.on("getfeed", (price) => {
      console.log(price)
      // price = JSON.parse(price);
      // console.log(
      //   price.symbol_name + "  " + price.price + "  " + price.timestamp
      // );
      // below method will append the whole array instead of appending the new value
      // somehow it worked already after restarting my laptop??
      setX_axis((oldX) => [...oldX, JSON.parse(price).timestamp]);
      setY_axis((oldY) => [...oldY, JSON.parse(price).price]);
    });
    return ()=>socket.disconnect(true)
  }, []);

  return (
    <div id="">
      <h1 style={{ color: "black" }}>{chart_name}</h1>
      <Line data={data} style={{ width: "100%" }} />

    </div>
  );
};

export default observer(LineChart);

// Fix:
// #1: store history OR the DOM state update unless refresh
// #2: emits from socket.io console logged redundantly


// {history.map((d) => (
//   <div>
//     <div>
//       {d[1][0]}: {d[1][1]} (y_axis.push(d[1][1]))
//     </div>
//     <div>
//       {d[1][2]}: {d[1][3]} (x_axis.push(d[1][3]))
//     </div>
//     <div>
//       {d[1][4]}: {d[1][5]} (chart_name = d[1][5])
//     </div>
//     <hr />
//   </div>
// ))} 