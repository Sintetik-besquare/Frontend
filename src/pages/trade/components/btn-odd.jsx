import { observer } from "mobx-react-lite";
import React from "react";
import { TbTriangle } from "react-icons/tb";
import { useStores } from "../../../store";

const BtnOdd = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="call-60">${chart_store.odd_payout}</div>
      <div id="call-40">
        ODD <TbTriangle id="button-icon" />
      </div>
    </>
  );
};

export default observer(BtnOdd);
