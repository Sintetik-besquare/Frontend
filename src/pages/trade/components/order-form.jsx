import React, { useState } from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";

const OrderForm = () => {
  const { app_store } = useStores();
  const [stake, setStake] = useState(0);

  React.useEffect(() => {
    //rerender UI when store.isloggedin change
  }, [app_store.is_loggedin]);

  function showLoginModal() {
    alert("please login first");
  }

  function setStakeFromInput(event) {
    setStake(event.target.value);
  }

  return (
    <div>
      <div>
        <div className="input">
          <input type="text" placeholder="Volatility10" />
        </div>
        <div className="input">
          <input type="text" placeholder="Rise/Fall" />
        </div>
        <b>Ticks</b>
        <div className="input flex">
          <button
            disabled={stake <= 0}
            onClick={() => {
              setStake(stake - 1);
            }}
          >
            -
          </button>
          <input
            type="text"
            placeholder={stake}
            onChange={setStakeFromInput}
          />
          <button
            onClick={() => {
              setStake(stake + 1);
            }}
          >
            +
          </button>
        </div>
        {app_store.is_loggedin === true ? (
          <span>
            <button className="button_green_light">BUY</button>
            <button className="button_red_light">SELL</button>
          </span>
        ) : (
          <span
            onClick={() => {
              showLoginModal();
            }}
          >
            <button disabled={true}>BUY</button>
            <button disabled={true}>SELL</button>
          </span>
        )}
      </div>
    </div>
  );
};

export default observer(OrderForm);
