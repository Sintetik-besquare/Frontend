import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";
import { TbEqual } from "react-icons/tb";

const BtnOdd = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="call-60">${chart_store.match_payout}</div>
      <div id="call-40">
        MATCH <TbEqual id="button-icon" />
      </div>
    </>
  );
};

export default observer(BtnOdd);
