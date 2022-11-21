import React from "react";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import PrimaryCard from "./user-profile-primary";
import GenderInputSelect from "./genderinput";
import EducationLevelSelect from "./educationlevel";
import JobDropDown from "./joblist";
import { getUser, updateUser } from "../../../services/users";
import { CountryDropdown } from "react-country-region-selector";

function InputFieldText() {
  //useStore from users.js
  const { user_store } = useStores();

  // //Variables in input field page
  const [disabled, setDisabled] = useState(true);
  const [country, setCountry] = useState("");

  useEffect(() => {
    // console.log("asdsad");
    getUser().then((z) => user_store.updateUserDetail(z));
    // .then(user_store.updateUserDetail.bind(user_store))
    // .then(() => {
    //   console.log("user");
    //   console.log(user_store.user_detail.first_name);
    //   console.log(user_store.user_detail.last_name);
    //   console.log(user_store.user_detail.date_join);
    // });
  }, []);

  useEffect(() => {}, [user_store.user_detail]);

  const handleEditProfile = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      {/* Content for the user profile tab */}

      <div className="user-profile-card">
        <PrimaryCard />
        <div className="user-profile-paper">
          <div class="user-profile-details-card">
            <div className="user-profile-details-column">
              <span className="span-profile-details">First Name</span>
              <hr></hr>
              <div>
                {disabled ? (
                  <input
                    disabled={disabled}
                    value={user_store.user_detail.first_name}
                  />
                ) : (
                  <input placeholder="Your First Name" />
                )}
              </div>
            </div>
            <div className="user-profile-details-column">
              <span className="span-profile-details">Last Name</span>
              <hr></hr>
              {disabled ? (
                <input
                  disabled={disabled}
                  value={user_store.user_detail.last_name}
                />
              ) : (
                <input placeholder="Your Last Name" />
              )}
            </div>
          </div>

          <div class="user-profile-details-card">
            <div className="user-profile-details-column">
              <span className="span-profile-details">Age</span>
              <hr></hr>
              {disabled ? (
                <input disabled={disabled} value={user_store.user_detail.age} />
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

          <div class="user-profile-details-card">
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

          <div class="user-profile-details-card">
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
