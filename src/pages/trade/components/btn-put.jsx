import { observer } from "mobx-react-lite";
import React from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useStores } from "../../../store";

const BtnPut = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="put-60">${chart_store.put_payout}</div>
      <div id="put-40">
        PUT <HiOutlineChevronDoubleDown id="button-icon15" />
      </div>
    </>
  );
};

export default observer(BtnPut);
