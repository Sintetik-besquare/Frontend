import React from "react";

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

export default EducationLevelSelect;
