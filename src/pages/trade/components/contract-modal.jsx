import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";

const ContractModal = () => {
  const { chart_store } = useStores();

  const contract = (type) => {
    chart_store.setContractType(type)
  }

  return (
    <div
      className="contract-modal"
      data-aos="fade-left"
      data-aos-duration="700"
    >
      <button disabled onClick={() => contract("Multiplier")}  style={{color:"grey"}}>Multiplier</button>
      <button onClick={() => contract("Rise/Fall")}>Rise / Fall</button>
      <button onClick={() => contract("Odd/Even")}>Odd / Even</button>
      <button disabled onClick={() => contract("Higher/Lower")} style={{color:"grey"}}>Higher / Lower</button>
      <button disabled onClick={() => contract("Touch/NoTouch")} style={{color:"grey"}}>Touch / NoTouch</button>
      <button disabled onClick={() => contract("Match/Differ")} style={{color:"grey"}}>Match / Differ</button>
      <button disabled onClick={() => contract("Over/Under")} style={{color:"grey"}}>Over / Under</button>
    </div>
  );
};

export default observer(ContractModal);
