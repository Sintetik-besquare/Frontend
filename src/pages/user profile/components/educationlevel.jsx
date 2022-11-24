import React from "react";
import { observer } from "mobx-react-lite";

const EducationLevelSelect = (props) => (
  <select {...props}>
    <option value="" selected="selected" disabled="disabled">
      Select Education Level
    </option>
    <option value="elementary">Elementary</option>
    <option value="secondary">Secondary</option>
    <option value="tertiary">Tertiary</option>
    <option value="other">Others</option>
  </select>
);

export default observer(EducationLevelSelect);
