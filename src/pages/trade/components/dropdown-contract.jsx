import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import { BiCaretLeft } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";
import ContractModal from "./contract-modal";

const DropdownContract = () => {
  const { chart_store } = useStores();
  const [contractModal, setContractModal] = useState(false);

  return (
    <>
      <div id="pad-top" onClick={() => setContractModal(!contractModal)}>
        <div id="left">
          <BiCaretLeft id="button-icon12" />
        </div>
        <div id="middle">{chart_store.contract_type}</div>
        <div id="icons-blue">
          <FiTrendingUp id="button-icon13" />
        </div>
      </div>
      {contractModal === true && <ContractModal />}
    </>
  );
};

export default observer(DropdownContract);
