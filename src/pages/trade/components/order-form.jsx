import React, { useRef, useState, useEffect } from "react";
import io from "socket.io-client";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";
import { BiCaretLeft } from "react-icons/bi";
import { TbMinusVertical } from "react-icons/tb";
import { FiMinus } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiTrendingDown } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { MdAutoGraph } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const OrderForm = () => {
  /**
   * @type {React.MutableRefObject<Socket>}
   */
  const socket = useRef();
  const { app_store, chart_store } = useStores();
  const TOKEN = app_store.access_token;
  let error_message = [];

  const [callPayout, setCallPayout] = useState(123.45);
  const [putPayout, setPutPayout] = useState(123.45);

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
      chart_store.setStatus(message.status);
      console.log(message.status);
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
      stake: chart_store.stake,
      ticks: chart_store.ticks,
      option_type: chart_store.option_type,
      entry_time: Math.floor(Date.now() / 1000),
    };
    console.log(order);
    socket.current.emit("order", order);
  };

  return (
    <div
      className="form_container"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
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
              validate();
            }}
          >
            <div id="call-60">
              <div id="call-left">
                <span>${callPayout}</span>
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
              validate();
            }}
          >
            <div id="put-60">
              <div id="put-left">
                <span>${putPayout}</span>
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
              validate();
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
          </div>
        </div>
      ) : (
        <div id="call_put_reset2">
          <button
            className="button_green_disabled"
            onClick={() => {
              validate();
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
                  CALL
                  <HiOutlineChevronDoubleUp id="button-icon14" />
                </span>
              </div>
            </div>
          </button>
          <button
            className="button_red_disabled"
            onClick={() => {
              validate();
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
                  PUT
                  <HiOutlineChevronDoubleDown id="button-icon15" />
                </span>
              </div>
            </div>
          </button>
          <button
            className="reset_disabled "
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
          </div>

        </div>
      )}
    </div>
  );
};

export default observer(OrderForm);
