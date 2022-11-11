import React, { useState } from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";

const OrderForm = () => {
  const { app_store, chart_store } = useStores();
  const [stake, setStake] = useState(0);

  React.useEffect(() => {
    console.log(chart_store.index);
    //rerender UI when store.isloggedin change
  }, [app_store.is_loggedin, chart_store]);

  function promptLogin() {
    alert("please login first");
  }

  function setStakeFromInput(event) {
    setStake(event.target.value);
  }

  return (
    <div className="form_container">
      <h3 style={{ color: "black" }}>
        stake {chart_store.stake}, {chart_store.ticks} ticks <br/>
        {chart_store.option_type} {chart_store.index} <br />
        <br />
      </h3>
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

      <div className="form_row">
        <button
          disabled={chart_store.ticks <= 0}
          onClick={() => {
            chart_store.ticks(chart_store.ticks--);
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
            chart_store.ticks(chart_store.ticks++);
          }}
        >
          +
        </button>
      </div>

      <div className="form_row">
        <button
          disabled={chart_store.stake <= 0}
          onClick={() => {
            chart_store.stake(chart_store.stake--);
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
            chart_store.stake(chart_store.stake++);
          }}
        >
          +
        </button>
      </div>

      {app_store.is_loggedin === true &&
      chart_store.stake > 0 &&
      chart_store.ticks > 0 ? (
        <>
          <button
            className="form_row button_green_light"
            onClick={(e) => {
              chart_store.setOptionType("CALL");
            }}
          >
            CALL
          </button>
          <button
            className="form_row button_red_light"
            onClick={(e) => {
              chart_store.setOptionType("PUT");
            }}
          >
            PUT
          </button>
        </>
      ) : (
        <>
          <button
            className="form_row "
            onClick={(e) => {
              chart_store.setOptionType("CALL");
            }}
          >
            CALL
          </button>
          <button
            className="form_row "
            onClick={(e) => {
              chart_store.setOptionType("PUT");
            }}
          >
            PUT
          </button>
        </>
      )}
    </div>
  );
};

export default observer(OrderForm);
