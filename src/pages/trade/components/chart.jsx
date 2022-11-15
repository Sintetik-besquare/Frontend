import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import io from "socket.io-client";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import { getHistoricalFeed } from "../../../services/historical-feed";
import { CategoryScale } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
const LineChart = () => {
  const { chart_store } = useStores();
  const [history, setHistory] = React.useState(chart_store.historical_price);

  const chart_name = "Volatility 10 (1s)";
  chart_store.index = chart_name;

  const [x_axis, setX_axis] = React.useState([]);
  const [y_axis, setY_axis] = React.useState([]);
  const data = {
    labels: x_axis,
    datasets: [
      {
        label: chart_name,
        backgroundColor: "black",
        borderColor: "black",
        data: y_axis,
        pointStyle: "dash",
        pointBorderWidth: 0,
      },
    ],
    options: {
      interaction: {
        intersect: false,
      },
      plugins: {
        legend: false,
      },
      scales: {
        x: {
          type: "linear",
        },
      },
    },
  };

  useEffect(() => {
    getHistoricalFeed().then(setHistory);
    history.map((d) => {
      y_axis.push(d[1][1]);
      x_axis.push(d[1][3]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const socket = io.connect("http://localhost:3002");
    /**
     *
     * @param {any[]} z
     * @returns
     */
    const limit = (z) => {
      if (z.length > 100) {
        return z.slice(-100);
      }
      return z;
    };
    socket.on("getfeed", (price) => {
      setX_axis((oldX) => limit([...oldX, JSON.parse(price).timestamp]));
      setY_axis((oldY) => limit([...oldY, JSON.parse(price).price]));
    });
    return () => socket.disconnect(true); //prevent spam
  }, []);

  return (
    <div id="">
      <Line data={data} style={{ width: "100%" }} />
    </div>
  );
};

export default observer(LineChart);
