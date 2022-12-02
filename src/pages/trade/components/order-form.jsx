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
import BtnOdd from "./btn-odd";
import BtnEven from "./btn-even";
import BtnMatch from "./btn-match";
import BtnDiffer from "./btn-differ";
import LastDigitPrediction from "./last-digit-prediction";
import Summary from "./modal-summary";

const OrderForm = () => {
  /**
   * @type {React.MutableRefObject<Socket>}
   */
  const socket = useRef();
  const { app_store, chart_store } = useStores();
  const TOKEN = app_store.access_token;
  let error_message = [];

  useEffect(() => {
    socket.current = io("http://login.sintetik.xyz", {
      query: {
        token: TOKEN,
      },
    });

    socket.current.on("connect_error", (e) => {
      console.log(e);
    });

    socket.current.on("feed", () => {
      console.log("connected to server");
    });

    socket.current.on("buy", (message) => {
      chart_store.toggleShowSummary(false);
      chart_store.toggleIndexModal(false);
      chart_store.toggleContractModal(false);
    });

    socket.current.on("iswinning", (message) => {
      chart_store.setIswinning(message.status);
    });

    socket.current.on("sell", (message) => {
      chart_store.setPayoutSummary(message);
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
      error_message.push("please login first");
    }
    if (chart_store.ticks <= 0 || chart_store.ticks > 10 || isNaN(chart_store.ticks)) {
      error_message.push("ticks must be a value between 1 to 10");
    }
    if (chart_store.stake <= 0 || isNaN(chart_store.stake)) {
      error_message.push("stake cannot be 0");
    }
    if (chart_store.contract_type === "Matches/differs") {
      if (chart_store.lastDigitPrediction===null)
        error_message.push("you must choose a last digit prediction to match or differ");
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
    if (chart_store.contract_type!=="Matches/differs"){
      chart_store.lastDigitPrediction=0
    }
    let order = {
      index: chart_store.index,
      stake: parseFloat(chart_store.stake),
      ticks: parseInt(chart_store.ticks),
      option_type: chart_store.option_type.toString(),
      contract_type: chart_store.contract_type,
      entry_time: Math.floor(Date.now() / 1000) - 1,
      digit: chart_store.lastDigitPrediction,
    };
    chart_store.toggleIsBuying(true);
    chart_store.setOrderSummary(order);
    console.log(chart_store.orderSummary);
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

        {chart_store.contract_type === "Matches/differs" && (
          <div className="form_row">
            <LastDigitPrediction />
          </div>
        )}
      </div>

      {app_store.is_loggedin === true &&
      chart_store.stake > 0 &&
      chart_store.isbuying !== true &&
      chart_store.ticks > 0 ? (
        <div>
          {chart_store.contract_type === "Rise/fall" && (
            <>
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
            </>
          )}

          {chart_store.contract_type === "Even/odd" && (
            <>
              <button
                className="form_row button_green_light"
                onClick={() => {
                  chart_store.setOptionType("odd");
                  validate();
                }}
              >
                <BtnOdd />
              </button>
              <button
                className="form_row button_red_light"
                onClick={() => {
                  chart_store.setOptionType("even");
                  validate();
                }}
              >
                <BtnEven />
              </button>
            </>
          )}

          {chart_store.contract_type === "Matches/differs" && (
            <>
              <button
                className="form_row button_green_light"
                onClick={() => {
                  chart_store.setOptionType("matches");
                  validate();
                }}
              >
                <BtnMatch />
              </button>
              <button
                className="form_row button_red_light"
                onClick={() => {
                  chart_store.setOptionType("differs");
                  validate();
                }}
              >
                <BtnDiffer />
              </button>
            </>
          )}
        </div>
      ) : (
        <div>
          <button
            className="form_row button_green_disabled"
            onClick={() => {
              validate();
            }}
          >
            {chart_store.contract_type === "Rise/fall" && <BtnCall />}
            {chart_store.contract_type === "Even/odd" && <BtnOdd />}
            {chart_store.contract_type === "Matches/differs" && <BtnMatch />}
          </button>
          <button
            className="form_row button_red_disabled"
            onClick={() => {
              validate();
            }}
          >
            {chart_store.contract_type === "Rise/fall" && <BtnPut />}
            {chart_store.contract_type === "Even/odd" && <BtnEven />}
            {chart_store.contract_type === "Matches/differs" && <BtnDiffer />}
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
