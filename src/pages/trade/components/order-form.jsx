import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";

const OrderForm = () => {
  /**
   * @type {React.MutableRefObject<Socket>}
   */
  const socket = useRef();
  const { app_store, chart_store } = useStores();
  const TOKEN = app_store.access_token;
  let error_message = [];

  useEffect(() => {
    socket.current = io("http://localhost:3001", {
      query: {
        token: TOKEN,
      },
    });
    socket.current.on("getfeed", () => {
      console.log("connected to server");
    });
    socket.current.on("buy", (message) => {
      console.log(message);
    });

    socket.current.on("iswinning", (message) => {
      console.log(message);
    });
    socket.current.on("sell", (message) => {
      console.log(message);
    });
    // socket.current = socket_connection; // assign current socket_connection to useRef socket
    return () => socket.current.disconnect(true); // prevent spam connection
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emitOrder = () => {
    let order = {
      index: chart_store.index,
      stake: chart_store.stake,
      ticks: chart_store.ticks,
      option_type: chart_store.option_type,
      entry_time: "",
    };
    socket.current.emit("order", order);
    console.log(socket.current); // connected: true
    console.log(order); // Volatility 10 (1s)
  };
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
        {chart_store.index}
        {chart_store.option_type}<br />
        {chart_store.ticks}<br />
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
              onClick={() => {
                chart_store.setOptionType("call");
                emitOrder();
              }}
            >
              call
            </button>
            <button
              className="form_row button_red_light"
              onClick={() => {
                chart_store.setOptionType("put");
                emitOrder();
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
