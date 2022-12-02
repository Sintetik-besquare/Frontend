import { observer } from "mobx-react-lite";
import React from "react";
import { TbSquare } from "react-icons/tb";
import { useStores } from "../../../store";

const BtnEven = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="call-60">${chart_store.even_payout}</div>
      <div id="call-40">
        EVEN <TbSquare id="button-icon" />
      </div>
    </>
  );
};

export default observer(BtnEven);
