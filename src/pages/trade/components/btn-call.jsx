import { observer } from "mobx-react-lite";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useStores } from "../../../store";

const BtnCall = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="call-60">
        <div id="call-left">
          <span>${chart_store.call_payout}</span>
        </div>
      </div>
      <div id="call-40">
        <div id="call-right">
          <span>
            CALL
            <HiOutlineChevronDoubleUp id="button-icon14" />
          </span>
        </div>
      </div>
    </>
  );
};

export default observer(BtnCall);