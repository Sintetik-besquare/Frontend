import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";

const ContractModal = () => {
  const { chart_store } = useStores();

  return (
    <div
      className="contract-modal"
      data-aos="fade-left"
      data-aos-duration="700"
    >
      <button disabled style={{color:"grey"}}>Multiplier</button>
      <button onClick={() => {chart_store.setContractType("Rise/Fall");}}>Rise / Fall</button>
      <button onClick={() => {chart_store.setContractType("Odd/Even");}}>Odd / Even</button>
      <button disabled style={{color:"grey"}}>Higher / Lower</button>
      <button disabled style={{color:"grey"}}>Touch / NoTouch</button>
      <button disabled style={{color:"grey"}}>Match / Differ</button>
      <button disabled style={{color:"grey"}}>Over / Under</button>
    </div>
  );
};

export default observer(ContractModal);
