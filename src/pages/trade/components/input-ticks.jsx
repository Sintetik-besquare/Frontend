import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";

const InputTicks = () => {
  const { chart_store } = useStores();

  return (
    <div>
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
  );
};

export default observer(InputTicks);
