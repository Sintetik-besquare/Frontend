import React from "react";

const GenderInputSelect = (props) => (
  <select {...props}>
    <option value="" selected="selected" disabled="disabled">
      Select Gender
    </option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
);

export default GenderInputSelect;
