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
import { FiMinus } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiTrendingDown } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { MdAutoGraph } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BiCaretLeft } from "react-icons/bi";
import { getHistoricalFeed } from "../../../services/historical-feed";
import { CategoryScale } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
const LineChart = () => {
  const { chart_store } = useStores();
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
    <div id="chart-container">
      <div id="chart-header">
        <div id="balance-container">
          <div id="balance-amount">
            <span style={{ fontSize: "50px", fontWeight: "400px" }}>
              $32,000.00
            </span>
            <font style={{ fontSize: "16px", fontWeight: "300px" }}>USD</font>
          </div>

          <div id="trend-percentage" style={{ fontSize: "18px" }}>
            <FiTrendingUp id="button-icon10" />
            <font> $1,234,23</font>
            <font> (2.4%)</font>
          </div>
        </div>
        <div class="wrapper">
          <ul>
            <li class="past-trades">
              <i aria-hidden="true">
                <BiCaretLeft id="button-icon10" />
              </i>
              <div class="slider">
                <p>Past Trades</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div id="graph-tools" style={{ fontSize: "23px" }}>
        <div id="minus">
          <FiMinus id="button-icon3" />
        </div>
        <div id="cube">
          <FiBox id="button-icon4" />
        </div>
        <div id="plus">
          <FiPlus id="button-icon5" />
        </div>
        |
        <div id="down">
          <FiTrendingDown id="button-icon6" />
        </div>
        <div id="up">
          <FiTrendingUp id="button-icon7" />
        </div>
        <div id="graph">
          <MdAutoGraph id="button-icon8" />
        </div>
        <div id="edit">
          <MdOutlineModeEditOutline id="button-icon9" />
        </div>
      </div> */}

      <div id="chart-graph">
        <Line data={data} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default observer(LineChart);
