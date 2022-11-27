import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";

const IndexModal = () => {
  const { chart_store } = useStores();

  const index = (type) => {
    chart_store.setIndex(type)
  }

  return (
    <div
      className="contract-modal"
      data-aos="fade-left"
      data-aos-duration="700"
    >
      <button disabled onClick={() => index("VOL10")} style={{color:"grey"}}>Volatility 10</button>
      <button disabled onClick={() => index("VOL50")}  style={{color:"grey"}}>Volatility 50</button>
      <button onClick={() => index("VOL100")}>Volatility 100</button>
      <button disabled onClick={() => index("VOL200")} style={{color:"grey"}}>Volatility 200</button>
      <button disabled onClick={() => index("VOL300")} style={{color:"grey"}}>Volatility 300</button>
    </div>
  );
};

export default observer(IndexModal);
