import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";
import { getBalance } from "../../../services/wallet";
import DropdownContract from "./dropdown-contract";
import DropdownIndex from "./dropdown-index";
import InputTicks from "./input-ticks";
import InputStake from "./input-stake";
import BtnCall from "./btn-call";
import BtnPut from "./btn-put";
import Summary from "./summary";

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

    socket.current.on("connect_error", (e) => {
      console.log(e);
    });

    socket.current.on("getfeed", () => {
      console.log("connected to server");
    });

    socket.current.on("buy", (message) => {
      console.log(message);
      chart_store.toggleShowSummary(false);
      chart_store.setSummary(message);
    });

    socket.current.on("iswinning", (message) => {
      chart_store.setIswinning(message.status);
    });

    socket.current.on("sell", (message) => {
      chart_store.setSummary(message);
      chart_store.toggleShowSummary(true);
      chart_store.toggleIsBuying(false);

      getBalance().then((e) => {
        chart_store.setWallet(e);
      });

      setTimeout(() => {
        chart_store.iswinning = [];
      }, 2000);

      // console.log(chart_store.summary);
    });
    return () => socket.current.disconnect(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getBalance();
  }, [chart_store]);

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
    if (error_message.length === 0) {
      emitOrder();
    } else {
      showError();
    }
  }

  function showError() {
    alert(error_message.join("\n"));
  }

  const emitOrder = () => {
    let order = {
      index: chart_store.index,
      stake: parseFloat(chart_store.stake),
      ticks: parseInt(chart_store.ticks),
      option_type: chart_store.option_type,
      entry_time: Math.floor(Date.now() / 1000) - 1,
      contract_type: chart_store.contract_type,
    };
    console.log(order);
    chart_store.toggleIsBuying(true);
    socket.current.emit("order", order);
  };

  return (
    <div className="form_container">
      <div>
        <div className="form_row">
          <DropdownIndex />
        </div>

        <div className="form_row">
          <DropdownContract />
        </div>
      </div>

      <div>
        <div className="form_row">
          <InputTicks />
        </div>

        <div className="form_row">
          <InputStake />
        </div>
      </div>

      {app_store.is_loggedin === true &&
      chart_store.stake > 0 &&
      chart_store.isbuying !== true &&
      chart_store.ticks > 0 ? (
        <div>
          <button
            className="form_row button_green_light"
            onClick={() => {
              chart_store.setOptionType("call");
              validate();
            }}
          >
            <BtnCall />
          </button>
          <button
            className="form_row button_red_light"
            onClick={() => {
              chart_store.setOptionType("put");
              validate();
            }}
          >
            <BtnPut />
          </button>
        </div>
      ) : (
        <div>
          <button
            disabled
            className="form_row button_green_disabled"
            onClick={() => {
              validate();
            }}
          >
            <BtnCall />
          </button>
          <button
            disabled
            className="form_row button_red_disabled"
            onClick={() => {
              validate();
            }}
          >
            <BtnPut />
          </button>
        </div>
      )}
      {chart_store.showSummary === true && chart_store.isbuying !== true && (
        <Summary />
      )}
    </div>
  );
};

export default observer(OrderForm);