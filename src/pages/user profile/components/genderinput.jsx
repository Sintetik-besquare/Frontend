import React from "react";
import { observer } from "mobx-react-lite";

const GenderInputSelect = (props) => (
  <select {...props}>
    <option value="" selected="selected" disabled="disabled">
      Select Gender
    </option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
);

export default observer(GenderInputSelect);
