import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";
import { BiCaretLeft } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";
import { MdAutoGraph } from "react-icons/md";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { getBalance } from "../../../services/wallet";
import chart from "./chart";
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
      chart_store.setSummary(message);
    });

    socket.current.on("iswinning", (message) => {
      chart_store.setIswinning(message.status);
      // console.log(chart_store.iswinning);
    });

    socket.current.on("sell", (message) => {
      chart_store.setSummary(message);
      chart_store.setShowSummary(true);
      chart_store.setIsBuying(false);

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
      // TODO: contract_type: chart_store.contract_type, (Rise/Fall) (Even/Odd)
    };
    console.log(order);
    chart_store.setIsBuying(true);
    socket.current.emit("order", order);
  };

  return (
    <div className="form_container">
      {/* <div id="form_container_header">
        <div id="trade-away">Trade Away</div>
      </div> */}
      <div>
        <div className="form_row">
          <div id="pad-top">
            <div id="left">
              <BiCaretLeft id="button-icon11" />
            </div>
            <div id="middle"> {chart_store.index}</div>
            <div id="icons-blue">
              <MdAutoGraph id="button-icon11" />
            </div>
          </div>
        </div>

        <div className="form_row">
          <div id="pad-top">
            <div id="left">
              <BiCaretLeft id="button-icon12" />
            </div>
            <div id="middle">Rise / Fall</div>
            <div id="icons-blue">
              <FiTrendingUp id="button-icon13" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="form_row">
          <div id="ticks">
            <div id="ticks-pad">Ticks</div>
            <div id="ticks2">
              <button
                className="button_red_small"
                disabled={chart_store.ticks <= 0}
                onClick={() => {
                  chart_store.setTicks(parseInt(chart_store.ticks) - 1);
                }}
              >
                -
              </button>
              <input
                type="number"
                value={parseInt(chart_store.ticks)}
                style={{ width: "100%" }}
                onChange={(e) => {
                  chart_store.setTicks(parseInt(e.target.value));
                }}
              />
              <button
                className="button_green_small"
                disabled={chart_store.ticks >= 10}
                onClick={() => {
                  chart_store.setTicks(parseInt(chart_store.ticks) + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="form_row">
          <div id="ticks">
            <div id="ticks-pad">Stake</div>
            <div id="ticks2">
              <button
                className="button_red_small"
                disabled={chart_store.stake <= 0}
                onClick={() => {
                  chart_store.setStake(parseFloat(chart_store.stake) - 1);
                }}
              >
                -
              </button>
              <input
                type="number"
                value={parseFloat(chart_store.stake)}
                style={{ width: "100%" }}
                onChange={(e) => {
                  chart_store.setStake(parseFloat(e.target.value));
                }}
              />
              <button
                className="button_green_small"
                onClick={() => {
                  chart_store.setStake(parseFloat(chart_store.stake) + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
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
            <div id="call-60">
              <div id="call-left">
                <span>${chart_store.call_payout}</span>
              </div>
            </div>
            <div id="call-40">
              <div id="call-right">
                <span>
                  CALL
                  <HiOutlineChevronDoubleUp id="button-icon14" />
                </span>
              </div>
            </div>
          </button>
          <button
            className="form_row button_red_light"
            onClick={() => {
              chart_store.setOptionType("put");
              validate();
            }}
          >
            <div id="put-60">
              <div id="put-left">
                <span>${chart_store.put_payout}</span>
              </div>
            </div>
            <div id="put-40">
              <div id="put-right">
                <span>
                  PUT
                  <HiOutlineChevronDoubleDown id="button-icon15" />
                </span>
              </div>
            </div>
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
            <div id="call-60">
              <div id="call-left">
                <span>${chart_store.call_payout}</span>
              </div>
            </div>
            <div id="call-40">
              <div id="call-right">
                <span>
                  CALL
                  <HiOutlineChevronDoubleUp id="button-icon14" />
                </span>
              </div>
            </div>
          </button>
          <button
            disabled
            className="form_row button_red_disabled"
            onClick={() => {
              validate();
            }}
          >
            <div id="put-60">
              <div id="put-left">
                <span>${chart_store.put_payout}</span>
              </div>
            </div>
            <div id="put-40">
              <div id="put-right">
                <span>
                  PUT
                  <HiOutlineChevronDoubleDown id="button-icon15" />
                </span>
              </div>
            </div>
          </button>
          {/* <button
            className="button_orange_disabled "
            onClick={() => {
              validate();
            }}
          >
            Reset balance
          </button>
          <div id="graph-tools" style={{ fontSize: "23px" }}>
            <div id="minus">
              <FiMinus id="button-icon3" />
            </div>
            <div id="cube">
              <FiBox id="button-icon4" />
            </div>
            <div id="plus">
              <FiPlus id="button-icon5" />
            </div>
            <TbMinusVertical id="button-icon6" />
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
        </div>
      )}
      {chart_store.showSummary === true && chart_store.isbuying !== true && (
        <Summary />
      )}
    </div>
  );
};

export default observer(OrderForm);
