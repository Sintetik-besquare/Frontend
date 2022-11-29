import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";
import ErrorMsg from "../../../components/error-msg"

const InputTicks = () => {
  const { chart_store } = useStores();

  return (
    <div>
        <div className="lbl-error">
          Stake{(chart_store.stake <= 0 || !chart_store.stake) && <ErrorMsg msg="stake cannot be 0" />}
        </div>
        <div id="input-row">
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
  );
};

export default observer(InputTicks);
