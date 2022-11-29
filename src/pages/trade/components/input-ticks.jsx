import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";
import ErrorMsg from "../../../components/error-msg"

const InputTicks = () => {
  const { chart_store } = useStores();

  return (
    <div>
        <div className="lbl-error">
          Ticks{(chart_store.ticks <= 0 || chart_store.ticks > 10 || !chart_store.ticks) && <ErrorMsg msg="ticks must be value between 1 to 10" />}
        </div>
        <div id="input-row">
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
  );
};

export default observer(InputTicks);
