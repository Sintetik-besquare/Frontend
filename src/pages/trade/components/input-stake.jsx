import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";

const InputTicks = () => {
  const { chart_store } = useStores();

  return (
    <div>
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
  );
};

export default observer(InputTicks);
