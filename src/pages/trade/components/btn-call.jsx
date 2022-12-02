import { observer } from "mobx-react-lite";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useStores } from "../../../store";

const BtnCall = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="call-60">${chart_store.call_payout}</div>
      <div id="call-40">
        CALL <HiOutlineChevronDoubleUp id="button-icon" />
      </div>
    </>
  );
};

export default observer(BtnCall);
