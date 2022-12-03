import React from "react";
import ReactSlider from "react-slider";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";

const Slider = () => {
  const { chart_store } = useStores();

  return (
    <div>
      <div id="ticks">
        <div id="ticks-pad">Ticks {chart_store.ticks}</div>
        <ReactSlider
          className="customSlider"
          thumbClassName="customSlider-thumb"
          trackClassName="customSlider-track"
          markClassName="customSlider-mark"
          marks={1}
          min={0}
          max={10}
          defaultValue={0}
          value={chart_store.ticks}
          onChange={(value) => chart_store.setTicks(parseInt(value))}
        />
      </div>
    </div>
  );
};

export default observer(Slider);
