import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";
import { BiCaretLeft } from "react-icons/bi";
import { MdAutoGraph } from "react-icons/md";

const DropdownContract = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="pad-top">
        <div id="left">
          <BiCaretLeft id="button-icon11" />
        </div>
        <div id="middle"> {chart_store.index}</div>
        <div id="icons-blue">
          <MdAutoGraph id="button-icon11" />
        </div>
      </div>
    </>
  );
};

export default observer(DropdownContract);
