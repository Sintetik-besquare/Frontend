import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";

const OrderForm = () => {
  const socket = useRef();
  const TOKEN = process.env.TOKEN;

  useEffect(() => {
    var socket_connection = io.connect("http://localhost:3002", {
      query: {
        token: TOKEN,
      },
    });
    socket_connection.on("buy", (message) => {
      console.log(message);
    });

    socket_connection.on("iswinning", (message) => {
      console.log(message);
    });
    socket_connection.on("sell", (message) => {
      console.log(message);
    });
    socket.current = socket_connection;
    //prevent spam
    return () => socket_connection.disconnect(true);
  }, []);

  function emitOrder() {
    socket.current.emit("order", {
      index: chart_store.index,
      stake: chart_store.stake,
      ticks: chart_store.ticks,
      option_type: chart_store.option_type,
      entry_time: "",
    });
  }

  const { app_store, chart_store } = useStores();
  let error_message = [];

  function validate() {
    if (app_store.is_loggedin === false) {
      error_message.push("please login first ");
    }
    if (chart_store.ticks <= 0) {
      error_message.push(" ticks cannot be 0 ");
    }
    if (chart_store.stake <= 0) {
      error_message.push(" stake cannot be 0 ");
    }

    alert(error_message.join("\n"));
    error_message = [];
  }

  return (
    <div className="form_container">
      {/* <h3 style={{ color: "black" }}>
        {chart_store.historical_price}
        {chart_store.index}
        {chart_store.option_type}
        {chart_store.ticks}
        {chart_store.stake}
      </h3> */}
      <div>
        <div className="form_row">
          <span>Left</span>
          <div> {chart_store.index}</div>
          <span>Right</span>
        </div>

        <div className="form_row">
          <span>Left</span>
          <div>Rise / Fall</div>
          <span>Right</span>
        </div>
      </div>

      <div>
        <div className="form_row">
          <button
            disabled={chart_store.ticks <= 0}
            onClick={() => {
              chart_store.setTicks((chart_store.ticks -= 1));
            }}
          >
            -
          </button>
          <input
            type="number"
            placeholder={chart_store.ticks}
            style={{ width: "100%" }}
            onChange={(e) => {
              chart_store.setTicks(e.target.value);
            }}
          />
          <button
            disabled={chart_store.ticks >= 10}
            onClick={() => {
              chart_store.setTicks((chart_store.ticks += 1));
            }}
          >
            +
          </button>
        </div>

        <div className="form_row">
          <button
            disabled={chart_store.stake <= 0}
            onClick={() => {
              chart_store.setStake((chart_store.stake -= 1));
            }}
          >
            -
          </button>
          <input
            type="number"
            placeholder={chart_store.stake}
            style={{ width: "100%" }}
            onChange={(e) => {
              chart_store.setStake(e.target.value);
            }}
          />
          <button
            onClick={() => {
              chart_store.setStake((chart_store.stake += 1));
            }}
          >
            +
          </button>
        </div>
      </div>
      <div>
        {app_store.is_loggedin === true &&
        chart_store.stake > 0 &&
        chart_store.ticks > 0 ? (
          <>
            <button
              className="form_row button_green_light"
              onClick={(e) => {
                chart_store.setOptionType("call");
                emitOrder();
              }}
            >
              call
            </button>
            <button
              className="form_row button_red_light"
              onClick={(e) => {
                chart_store.setOptionType("put");
              }}
            >
              put
            </button>
          </>
        ) : (
          <>
            <button
              className="form_row "
              onClick={() => {
                validate();
              }}
            >
              call
            </button>
            <button
              className="form_row "
              onClick={() => {
                validate();
              }}
            >
              put
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default observer(OrderForm);
