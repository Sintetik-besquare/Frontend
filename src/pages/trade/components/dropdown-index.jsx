import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../store";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { MdAutoGraph } from "react-icons/md";
import IndexModal from "./modal-index";

const DropdownContract = () => {
  const { chart_store } = useStores();

  return (
    <>
      <div id="pad-top" onClick={() => chart_store.toggleIndexModal(!chart_store.showIndexModal)}>
        <div id="left">
        {chart_store.showIndexModal ? (
            <BiCaretRight id="button-icon12" />
            ) : (
            <BiCaretLeft id="button-icon12" />
          )}        </div>
        <div id="middle"> {chart_store.index}</div>
        <div id="icons-blue">
          <MdAutoGraph id="button-icon11" />
        </div>
      </div>
      {chart_store.showIndexModal && <IndexModal />}
    </>
  );
};

export default observer(DropdownContract);
