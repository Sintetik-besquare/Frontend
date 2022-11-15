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
    validate();
  }, []);

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
    return () => socket.current.disconnect(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function validate() {
    error_message = [];
    if (app_store.is_loggedin === false) {
      error_message.push("please login first ");
    }
    if (chart_store.ticks <= 0 || chart_store.ticks > 10) {
      error_message.push(" ticks must be a value between 1 to 10 ");
    }
    if (chart_store.stake <= 0) {
      error_message.push(" stake cannot be 0 ");
    }
  }

  function showError() {
    validate();
    alert(error_message.join("\n"));
    error_message = [];
  }

  const emitOrder = () => {
    let order = {
      index: chart_store.index,
      stake: chart_store.stake,
      ticks: chart_store.ticks,
      option_type: chart_store.option_type,
      entry_time: Math.floor(Date.now() / 1000) ,
    };
    console.log(order)
    socket.current.emit("order", order);
  };

  return (
    <div className="form_container">
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
              chart_store.setStake(e.target.value.toFixed(2));
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
                showError();
              }}
            >
              call
            </button>
            <button
              className="form_row "
              onClick={() => {
                showError();
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
