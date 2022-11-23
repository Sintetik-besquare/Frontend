import React from "react";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
<<<<<<< HEAD
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
=======
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import PrimaryCard from "./user-profile-primary";
import GenderInputSelect from "./genderinput";
import EducationLevelSelect from "./educationlevel";
import JobDropDown from "./joblist";
import { getUser, updateUser } from "../../../services/users";
import { CountryDropdown } from "react-country-region-selector";
import { editUserDetails } from "../../../services/user-info.js";

function InputFieldText() {
<<<<<<< HEAD
<<<<<<< HEAD
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

  useEffect(() => {
    updateUser().then((z) => user_store.updateUserDetail(z));
    console.log(user_store.user_detail);
  }, []);

  useEffect(() => {}, [user_store.user_detail]);

  const handleEditProfile = () => {
    setDisabled(!disabled);
=======
  const { user_store } = useStores();
  //Edit profile button function
  const [disabled, setDisabled] = useState(true);
  const [country, setCountry] = useState("");

=======
  const { user_store } = useStores();
  //Edit profile button function
  const [disabled, setDisabled] = useState(true);
  const [country, setCountry] = useState("");

>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
  const saveUserProfile = () => {
    let user_details = {
      firstname: user_store.first_name,
      lastname: user_store.last_name,
      age: user_store.age,
      gender: user_store.gender,
      residence: user_store.residence,
      occupation: user_store.occupation,
      education: user_store.education,
    };
    editUserDetails(user_details);
<<<<<<< HEAD
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
=======
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
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
<<<<<<< HEAD
<<<<<<< HEAD
                  <input
                    disabled={disabled}
                    value={user_store.user_detail.first_name}
                  />
=======
                  <input disabled={disabled} value={user_store.first_name} />
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
=======
                  <input disabled={disabled} value={user_store.first_name} />
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
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
            <div className="user-profile-details-column">
              <span className="span-profile-details">Last Name</span>
              <hr></hr>
              {disabled ? (
<<<<<<< HEAD
<<<<<<< HEAD
                <input
                  disabled={disabled}
                  value={user_store.user_detail.last_name}
                />
=======
                <input disabled={disabled} value={user_store.last_name} />
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
=======
                <input disabled={disabled} value={user_store.last_name} />
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
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
          </div>

          <div className="user-profile-details-card">
            <div className="user-profile-details-column">
              <span className="span-profile-details">Age</span>
              <hr></hr>
              {disabled ? (
<<<<<<< HEAD
<<<<<<< HEAD
                <input disabled={disabled} value={user_store.user_detail.age} />
=======
                <input disabled={disabled} value={user_store.age} />
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
=======
                <input disabled={disabled} value={user_store.age} />
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
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
                  onChange={(val) => user_store.setResidence(val)}
                />
              </div>
            </div>
            <div className="user-profile-details-column">
              <span className="span-profile-details">Education</span>
              <hr></hr>
              <EducationLevelSelect
                disabled={disabled}
                onChange={(val) => user_store.setEducation(val)}
              />
            </div>
          </div>

          <div className="user-profile-details-card">
            <div className="user-profile-details-column">
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
<<<<<<< HEAD
<<<<<<< HEAD
              <button onClick={handleEditProfile} className="button-5">
                {disabled ? "Edit User Profile" : "Save User Profile"}
              </button>
=======
=======
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
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
<<<<<<< HEAD
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
=======
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(InputFieldText);
