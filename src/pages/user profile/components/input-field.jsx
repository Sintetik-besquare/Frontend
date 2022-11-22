import React from "react";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import PrimaryCard from "./user-profile-primary";
import GenderInputSelect from "./genderinput";
import EducationLevelSelect from "./educationlevel";
import JobDropDown from "./joblist";
import { CountryDropdown } from "react-country-region-selector";

function InputFieldText() {
  const { user_store } = useStores();
  //Edit profile button function
  const [disabled, setDisabled] = useState(true);
  const [country, setCountry] = useState("");

  const handleEditProfile = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      {/* Content for the user profile tab */}

      <div className="user-profile-card">
        <PrimaryCard />
        <div className="user-profile-paper">
          <div className="user-profile-details-card">
            <div className="user-profile-details-column">
              <span className="span-profile-details">First Name</span>
              <hr></hr>
              <div>
                {disabled ? (
                  <input disabled={disabled} value={user_store.first_name} />
                ) : (
                  <input placeholder="Your First Name" />
                )}
              </div>
            </div>
            <div className="user-profile-details-column">
              <span className="span-profile-details">Last Name</span>
              <hr></hr>
              {disabled ? (
                <input disabled={disabled} value={user_store.last_name} />
              ) : (
                <input placeholder="Your Last Name" />
              )}
            </div>
          </div>

          <div className="user-profile-details-card">
            <div className="user-profile-details-column">
              <span className="span-profile-details">Age</span>
              <hr></hr>
              {disabled ? (
                <input disabled={disabled} value={user_store.age} />
              ) : (
                <input placeholder="Your Age" />
              )}
            </div>
            <div className="user-profile-details-column">
              <span className="span-profile-details">Gender</span>
              <hr></hr>
              <GenderInputSelect disabled={disabled} />
            </div>
          </div>

          <div className="user-profile-details-card">
            <div className="user-profile-details-column">
              <span className="span-profile-details">Country</span>
              <hr></hr>
              <div className="dropdown">
                <CountryDropdown
                  disabled={disabled}
                  value={country}
                  onChange={(val) => setCountry(val)}
                />
              </div>
            </div>
            <div className="user-profile-details-column">
              <span className="span-profile-details">Education</span>
              <hr></hr>
              <EducationLevelSelect disabled={disabled} />
            </div>
          </div>

          <div className="user-profile-details-card">
            <div className="user-profile-details-column">
              <span className="span-profile-details">Occupation</span>
              <hr></hr>
              <JobDropDown disabled={disabled} />
            </div>
          </div>

          <div>
            <div className="user-update-button">
              <button onClick={handleEditProfile} className="button-5">
                Edit User Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(InputFieldText);
