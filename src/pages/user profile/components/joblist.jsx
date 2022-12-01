import React from "react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStores } from "../../../store";

function JobDropDown({ disabled, occupation }) {
  const { user_store } = useStores();

  return (
    <>
      <select
        className="form-control dropdown"
        value={occupation}
        onChangeCapture={(e) => {
          user_store.setOccupation(e.target.value);
          e.preventDefault();
        }}
        disabled={disabled}
      >
        <option selected disabled>
          Choose Your Occupation
        </option>
        <optgroup label="Healthcare Practitioners and Technical Occupations:">
          <option value="Chiropractor">- Chiropractor</option>
          <option value="Dentist">- Dentist</option>
          <option value="Dietitian or Nutritionist">
            - Dietitian or Nutritionist
          </option>
          <option value="Optometrist">- Optometrist</option>
          <option value="Pharmacist">- Pharmacist</option>
          <option value="Physician">- Physician</option>
          <option value="Physician Assistant">- Physician Assistant</option>
          <option value="Registered Nurse">- Registered Nurse</option>
          <option value="Therapist">- Therapist</option>
          <option value="Veterinarian">- Veterinarian</option>
        </optgroup>
        <optgroup label="Business, Executive, Management, and Financial Occupations:">
          <option value="Chief Executive">- Chief Executive</option>
          <option value="General and Operations Manager">
            - General and Operations Manager
          </option>
          <option value="Accountant, Auditor">- Accountant, Auditor</option>
          <option value="Business Owner">- Business Owner</option>
        </optgroup>
        <optgroup label="Architecture and Engineering Occupations:">
          <option value="Architect, Surveyor, or Cartographer">
            - Architect, Surveyor, or Cartographer
          </option>
          <option value="Engineer">- Engineer</option>
        </optgroup>
        <optgroup label="Education, Training, and Library Occupations:">
          <option value="Postsecondary Teacher">
            - Postsecondary Teacher (e.g., College Professor)
          </option>
          <option value="Primary, Secondary, or Special Education School Teacher">
            - Primary, Secondary, or Special Education School Teacher
          </option>
        </optgroup>
        <optgroup label="Other Professional Occupations:">
          <option value="Computer Specialist, Mathematical Science">
            - Computer Specialist, Mathematical Science
          </option>
          <option value="Lawyer, Judge">- Lawyer, Judge</option>
          <option value="Physical Scientist">
            - Physical Scientist (e.g., Astronomer, Physicist, Chemist,
            Hydrologist)
          </option>
        </optgroup>
        <optgroup label="Office and Administrative Support Occupations:">
          <option value="Financial Clerk">- Financial Clerk</option>
        </optgroup>
        <optgroup label="Services Occupations:">
          <option value="Protective Service">
            - Protective Service (e.g., Fire Fighting, Police Officer,
            Correctional Officer)
          </option>
          <option value="Chef or Head Cook">- Chef or Head Cook</option>
          <option value="Retail Sales Worker">- Retail Sales Worker</option>
          <option value="Real Estate Sales Agent">
            - Real Estate Sales Agent
          </option>
        </optgroup>
        <optgroup label="Transportation Occupations:">
          <option value="Aircraft Pilot or Flight Engineer">
            - Aircraft Pilot or Flight Engineer
          </option>
          <option value="Motor Vehicle Operator">
            - Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck
            Driver)
          </option>
        </optgroup>
        <optgroup label="Other Occupations:">
          <option value="Military">- Military</option>
          <option value="Other Occupation">- Other Occupation</option>
          <option value="Not Applicable">- Not Applicable</option>
        </optgroup>
      </select>
    </>
  );
}

export default observer(JobDropDown);
