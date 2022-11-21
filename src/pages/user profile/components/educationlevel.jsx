import React from "react";

const EducationLevelSelect = (props) => (
  <select {...props}>
    <option value="" selected="selected" disabled="disabled">
      Select Education Level
    </option>
    <option value="Elementary">Elementary</option>
    <option value="Secondary">Secondary</option>
    <option value="Tertiary">Tertiary</option>
    <option value="Others">Others</option>
  </select>
);

export default EducationLevelSelect;
