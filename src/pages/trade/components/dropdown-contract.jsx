import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";
import ContractModal from "./modal-contract";

const DropdownContract = () => {
  const { chart_store } = useStores();
  const ref=React.useCallback((e)=>{
    if(e){
      //focus the thingy
      e.focus();
      //self distruct when it. loses the focus
      e.addEventListener('blur',()=>chart_store.toggleContractModal(false))
    }
  },[chart_store]);

  return (
    <>
      <div id="pad-top" onClick={() => chart_store.toggleContractModal(!chart_store.showContractModal)}>
        <div id="left">
          {chart_store.showContractModal ? (
            <BiCaretRight id="button-icon12" />
            ) : (
            <BiCaretLeft id="button-icon12" />
          )}
        </div>
        <div id="middle">{chart_store.contract_type}</div>
        <div id="icons-blue">
          <FiTrendingUp id="button-icon13" />
        </div>
      </div>
      {chart_store.showContractModal && chart_store.isbuying === false ? <ContractModal  ref={ref} /> : <></>}
    </>
  );
};

export default observer(DropdownContract);
