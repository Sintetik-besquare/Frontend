import { observer } from "mobx-react-lite";
import React from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useStores } from "../../../store";

const BtnPut = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="put-60">
        <div id="put-left">
          <span>${chart_store.put_payout}</span>
        </div>
      </div>
      <div id="put-40">
        <div id="put-right">
          <span>
            PUT
            <HiOutlineChevronDoubleDown id="button-icon15" />
          </span>
        </div>
      </div>
    </>
  );
};

export default observer(BtnPut);
