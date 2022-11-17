import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

const Example = () => {
  const [country, setCountry] = useState("");

  return (
    <div>
      <CountryDropdown
        disabled
        value={country}
        onChange={(val) => setCountry(val)}
      />
    </div>
  );
};

export default Example;
