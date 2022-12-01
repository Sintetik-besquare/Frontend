import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";

function GenderInputSelect({ disabled, gender }) {
  const { user_store } = useStores();

  return (
    <>
      <select
        value={gender}
        onChangeCapture={(e) => {
          user_store.setGender(e.target.value);
          e.preventDefault();
        }}
        disabled={disabled}
      >
        <option value="" selected="selected" disabled="disabled">
          Select Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </>
  );
}

export default observer(GenderInputSelect);
