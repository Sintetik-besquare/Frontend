import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";

const LastDigitPrediction = () => {
  const { chart_store } = useStores();

  const setActive = (digit) => {
    chart_store.setLastDigitPrediction(digit);
  };

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div id="ticks-pad">Last digit prediction</div>
      <div className="match-diff-btn-row">
        {digits.map((buttonLabel, i) => (
          <button
            key={i}
            name={buttonLabel}
            onClick={() => setActive(i)}
            className={i === chart_store.lastDigitPrediction ? "active" : ""}
          >
            {buttonLabel}
          </button>
        ))}
      </div>
    </div>
  );
};

export default observer(LastDigitPrediction);
