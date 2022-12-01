import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";

function EducationLevelSelect({ disabled, education }) {
  const { user_store } = useStores();

  return (
    <select
      value={education}
      onChangeCapture={(e) => {
        user_store.setEducation(e.target.value);
        e.preventDefault();
      }}
      disabled={disabled}
    >
      <option value="" selected="selected">
        Select Education Level
      </option>
      <option value="Elementary">Elementary</option>
      <option value="Secondary">Secondary</option>
      <option value="Tertiary">Tertiary</option>
      <option value="Others">Others</option>
    </select>
  );
}

export default observer(EducationLevelSelect);
