import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";

const IndexModal = () => {
  const { chart_store } = useStores();

  const index = (type) => {
    chart_store.setIndex(type);
  };

  return (
    <div
      className="order-form-modal"
      data-aos="fade-left"
      data-aos-duration="700"
    >
      <button onClick={() => index("VOL20")}>Volatility 20</button>
      <button onClick={() => index("VOL40")}>Volatility 40</button>
      <button onClick={() => index("VOL60")}>Volatility 60</button>
      <button onClick={() => index("VOL80")}>Volatility 80</button>
      <button onClick={() => index("VOL100")}>Volatility 100</button>
      <button onClick={() => index("VOL200")}>Volatility 200</button>
    </div>
  );
};

export default observer(IndexModal);
