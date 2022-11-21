import React, { useEffect } from "react";
import io from "socket.io-client";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { FiTrendingUp } from "react-icons/fi";
import { getHistoricalFeed } from "../../../services/historical-feed";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
const LineChart = () => {
  const { app_store, chart_store } = useStores();
  const [history, setHistory] = React.useState(chart_store.historical_price);

  const chart_name = "VOL100";
  chart_store.index = chart_name;

  const [x_axis, setX_axis] = React.useState([]);
  const [y_axis, setY_axis] = React.useState([]);
  const data = {
    labels: x_axis,
    datasets: [
      {
        label: chart_name,
        borderColor: "white",
        backgroundColor: "white",
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
    socket.on("connect_error", (e) => {
      console.log(e);
    });

    socket.on("getfeed", (price) => {
      setX_axis((oldX) => limit([...oldX, JSON.parse(price).timestamp]));
      setY_axis((oldY) => limit([...oldY, JSON.parse(price).price]));
    });
    return () => socket.disconnect(true); //prevent spam
  }, []);

  return (
    <div id="chart-container" data-aos="fade-right" data-aos-duration="1000">
      <div id="chart-header">
        <div id="balance-container">
          {chart_store.wallet ? (
            <div id="balance-amount">
              <span style={{ fontSize: "50px", fontWeight: "400px" }}>
                {chart_store.wallet}
              </span>
              <font style={{ fontSize: "16px", fontWeight: "300px" }}>USD</font>
            </div>
          ) : (
            <></>
          )}

          <div id="trend-percentage" style={{ fontSize: "18px" }}>
            <FiTrendingUp id="button-icon10" />
            <font> $1,234,23</font> {/* are you sure you wanna hardcode this?*/}
            <font> (2.4%)</font> {/* are you sure you wanna hardcode this?*/}
          </div>
        </div>
      </div>

      <div id="chart-graph">
        <Line data={data} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default observer(LineChart);
