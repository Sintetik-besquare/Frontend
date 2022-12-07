import React, { useEffect, useRef } from "react";
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
import Status from "./modal-status";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { getBalance } from "../../../services/wallet";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
const LineChart = () => {
  const socket = useRef();
  const { app_store, chart_store } = useStores();

  const [x_axis, setX_axis] = React.useState([]);
  const [y_axis, setY_axis] = React.useState([]);
  const data = {
    labels: x_axis,
    datasets: [
      {
        data: y_axis,
        label: chart_store.index,
        borderColor: "white",
        pointBorderWidth: 0,
        borderWidth: 1,
        tension: 0.1,
        animations: {
          x: {
            type: "number",
            duration: 5,
          },
          y: { duration: 2 },
        },
      },
    ],
  };

  useEffect(() => {
    getBalance().then((e) => {
      chart_store.setWallet(e);
    });
  }, []);

  useEffect(() => {
    socket.current = io("https://api.sintetik.xyz");
    socket.current.on("connect_error", (e) => {
      console.log(e);
    });

    return () => socket.current.disconnect(true); //prevent spam
  }, []);

  useEffect(() => {
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
    socket.current.emit("index", { index: chart_store.index });
    setX_axis([]);
    setY_axis([]);
    const append = (price) => {
      const o = JSON.parse(price);
      if (o.symbol_name !== chart_store.index) {
        return;
      }
      setX_axis((oldX) => limit([...oldX, o.timestamp]));
      setY_axis((oldY) => limit([...oldY, o.price]));
    };
    socket.current.off("feed");
    socket.current.on("feed", append);
  }, [chart_store.index]);

  return (
    <div id="chart-container" data-aos="fade-right" data-aos-duration="1000">
      <div id="chart-header">
        <div id="balance-container">
          {app_store.is_loggedin ? (
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
            <div>
              {y_axis[y_axis.length - 1] - y_axis[y_axis.length - 2] >= 0 ? (
                <FiTrendingUp id="button-icon10" className="green" />
              ) : (
                <FiTrendingDown id="button-icon10" className="red" />
              )}
            </div>

            <font>{y_axis[y_axis.length - 1]}</font>
            <font
              className={
                y_axis[y_axis.length - 1] - y_axis[y_axis.length - 2] >= 0
                  ? "green"
                  : "red"
              }
              style={{ marginLeft: "20px" }}
            >
              {isNaN(((y_axis[y_axis.length - 2]))) ? 
              "0" 
              : 
              (((y_axis[y_axis.length - 1] - y_axis[y_axis.length - 2]) * 100) /y_axis[y_axis.length - 2]).toPrecision(5)
              }%
            </font>
          </div>
        </div>
        <div id="status-container">
          <Status />
        </div>
      </div>

      <div id="chart-graph">
        <Line data={data} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default observer(LineChart);
