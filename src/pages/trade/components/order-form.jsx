import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";
import { BiCaretLeft } from "react-icons/bi";
// import { MdAutoGraph } from "react-icons/md";
// import { FiTrendingUp } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiTrendingDown } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { MdAutoGraph } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";

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
    return () => socket.current.disconnect(true);
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
      <div id="form_container_header">
        <div id="trade-away">Trade Away</div>
      </div>
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
          </div>
        </div>

        <div className="form_row">
          <div id="ticks">
            <div id="ticks-pad">Stake</div>
            <div id="ticks2">
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
        </div>
      </div>

      {app_store.is_loggedin === true &&
      chart_store.stake > 0 &&
      chart_store.ticks > 0 ? (
        <div id="call-put-reset">
          <button
            className="button_green_light"
            onClick={() => {
              chart_store.setOptionType("call");
                emitOrder();
            }}
          >
            <div id="call-60">
              <div id="call-left">
                <span>$123.45</span>
              </div>
            </div>
            <div id="call-40">
              <div id="call-right">
                <span>
                  call
                  <FiTrendingUp id="button-icon14" />
                </span>
              </div>
            </div>
          </button>
          <button
            className="button_red_light"
            onClick={() => {
              chart_store.setOptionType("put");
                emitOrder();
            }}
          >
            <div id="put-60">
              <div id="put-left">
                <span>$123.45</span>
              </div>
            </div>
            <div id="put-40">
              <div id="put-right">
                <span>
                  put
                  <FiTrendingDown id="button-icon15" />
                </span>
              </div>
            </div>
          </button>
          <button
            className="reset"
            onClick={(e) => {
              chart_store.setOptionType("PUT");
            }}
          >
            Reset Balance
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
          </div>
        </div>
      ) : (
        <div>
          <button
            className=" button_green_disabled"
            onClick={() => {
              validate();
            }}
          >
            call
          </button>
          <button
            className=" button_red_disabled"
            onClick={() => {
              validate();
            }}
          >
            put
          </button>
          <button
            className=" reset_disabled "
            onClick={() => {
              validate();
            }}
          >
            Reset balance
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default observer(OrderForm);
