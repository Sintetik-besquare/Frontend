import { observer } from "mobx-react-lite";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useStores } from "../../../store";

const BtnOdd = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="call-60">
        <div id="call-left">
          <span>${chart_store.odd_payout}</span>
        </div>
      </div>
      <div id="call-40">
        <div id="call-right">
          <span>
            ODD
            <HiOutlineChevronDoubleUp id="button-icon14" />
          </span>
        </div>
      </div>
    </>
  );
};

export default observer(BtnOdd);
