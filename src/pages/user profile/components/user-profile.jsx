import React from "react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import GenderInputSelect from "./genderinput";
import EducationLevelSelect from "./educationlevel";
import JobDropDown from "./joblist";
import { CountryDropdown } from "react-country-region-selector";
import { editUserDetails } from "../../../services/user-info.js";
import image from "../../../assets/user-profile.png";

const InputFieldText = () => {
  const { user_store } = useStores();
  //Edit profile button function
  const [disabled, setDisabled] = useState(true);
  const [country, setCountry] = useState("");

  function saveUserProfile() {
    let user_details = {
      first_name: user_store.first_name,
      last_name: user_store.last_name,
      age: user_store.age,
      gender: user_store.gender,
      residence: user_store.residence,
      occupation: user_store.occupation,
      education: user_store.education,
    };
    editUserDetails(user_details);
  }

  return (
    <div id="user-profile">
      <div id="user-profile-form">
      <p>{user_store.email}</p>
      <p>Joined on: {Date(user_store.date_join).toString()}</p>
        <div>
          <span className="span-profile-details">First Name</span>
          <hr></hr>
          <div>
            {disabled ? (
              <input disabled={disabled} value={user_store.first_name} />
            ) : (
              <input
                placeholder="Your First Name"
                onChange={(e) => {
                  user_store.setFirstName(e.target.value);
                  e.preventDefault();
                }}
              />
            )}
          </div>
        </div>
        <div>
          <span className="span-profile-details">Last Name</span>
          <hr></hr>
          {disabled ? (
            <input disabled={disabled} value={user_store.last_name} />
          ) : (
            <input
              placeholder="Your Last Name"
              onChange={(e) => {
                user_store.setLastName(e.target.value);
                e.preventDefault();
              }}
            />
          )}
        </div>

        <div>
          <span className="span-profile-details">Age</span>
          <hr></hr>
          {disabled ? (
            <input disabled={disabled} value={user_store.age} />
          ) : (
            <input
              type="number"
              placeholder="Your Age"
              onChange={(e) => {
                user_store.setAge(parseInt(e.target.value));
                e.preventDefault();
              }}
            />
          )}
        </div>

        <div>
          <span className="span-profile-details">Gender</span>
          <hr></hr>
          <GenderInputSelect disabled={disabled} />
        </div>

        <div>
          <span className="span-profile-details">Country</span>
          <hr></hr>
          <div className="dropdown">
            <CountryDropdown
              disabled={disabled}
              value={country}
              onChange={(val) => user_store.setResidence(val)}
            />
          </div>
        </div>
        <div>
          <span className="span-profile-details">Education</span>
          <hr></hr>
          <EducationLevelSelect
            disabled={disabled}
            onChange={(val) => user_store.setEducation(val)}
          />
          <div>
            <span className="span-profile-details">Occupation</span>
            <hr></hr>
            <JobDropDown
              disabled={disabled}
              onChange={(val) => user_store.setOccupation(val)}
            />
          </div>
        </div>

        <div>
          <div className="user-update-button">
            {disabled ? (
              <button
                onClick={() => setDisabled(!disabled)}
                className="button_green_small"
              >
                Edit User Profile
              </button>
            ) : (
              <button
                onClick={() => {
                  setDisabled(!disabled);
                  saveUserProfile();
                }}
                className="button_green_small"
              >
                Save User Profile
              </button>
            )}
          </div>
        </div>
      </div>
      <img src={image} alt="a profile page" style={{width:"40%"}}/>
    </div>
  );
};

export default observer(InputFieldText);
