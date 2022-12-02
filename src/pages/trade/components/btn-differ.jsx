import { observer } from "mobx-react-lite";
import React from "react";
import { TbEqualNot } from "react-icons/tb";
import { useStores } from "../../../store";

const BtnOdd = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="call-60">${chart_store.differ_payout}</div>
      <div id="call-40">
        DIFFER <TbEqualNot id="button-icon" />
      </div>
    </>
  );
};

export default observer(BtnOdd);
