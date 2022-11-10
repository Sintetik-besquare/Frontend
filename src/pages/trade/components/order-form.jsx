import React, { useState } from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";

const OrderForm = () => {
  const { app_store, chart_store } = useStores();
  const [stake, setStake] = useState(0);

  React.useEffect(() => {
    //rerender UI when store.isloggedin change
  }, [app_store.is_loggedin, chart_store]);

  function promptLogin() {
    alert("please login first");
  }

  function setStakeFromInput(event) {
    setStake(event.target.value);
  }

  return (
    <div>
      <h1>{chart_store.index}</h1>
      <h1>{chart_store.option_type}</h1>
      <h1>{chart_store.ticks}</h1>
      <div className="input flex">
        <button
          disabled={stake <= 0}
          onClick={() => {
            setStake(stake - 1);
          }}
        >
          -
        </button>
        <input type="text" placeholder={stake} onChange={setStakeFromInput} />
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
        <span>
          <button onClick={() => {promptLogin();}}>
            BUY
          </button>
          <button onClick={() => { promptLogin();}}>
            SELL
          </button>
        </span>
      )}
    </div>
  );
};

export default observer(OrderForm);
