import React, { useEffect } from "react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import JobDropDown from "./joblist";
import { CountryDropdown } from "react-country-region-selector";
import { editUserDetails } from "../../../services/user-info.js";
import EducationLevelSelect from "./educationlevel";
import GenderInputSelect from "./genderinput";
import Astronout from "../../../assets/profile.png";

const InputFieldText = () => {
  const { app_store, user_store } = useStores();
  const [error, setError] = useState(null);

  //Edit profile button function
  const [disabled, setDisabled] = useState(true);

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  async function saveUserProfile() {
    let user_details = {
      firstname: user_store.first_name,
      lastname: user_store.last_name,
      age: user_store.age,
      gender: user_store.gender,
      education: user_store.education,
      residence: user_store.residence,
      occupation: user_store.occupation,
    };
    let json = await editUserDetails(
      JSON.stringify(user_details, getCircularReplacer())
    );

    setError(json);
    if (json) {
      json.map((j) => {
        app_store.error_messages.push(j.msg);
      });
      app_store.show_error_message = true;
    } else {
      app_store.error_messages.push("Your profile has been updated");
      app_store.show_error_message = true;
      window.location.reload(false);
    }
  }

  return (
    <>
      <div className="user-profile-flex">
        <div className="left-profile">
          <center>Profile</center>
          <img src={Astronout} alt="a profile page" style={{ width: "40%" }} />
          <p className="email">{user_store.email}</p>
          <p className="join">
            Joined on<br></br>
            <span className="join-span">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }).format(user_store.date_join * 1000)}
            </span>
          </p>

          <p className="join">
            Client ID<br></br>
            <span className="join-span">{user_store.client_id}</span>
          </p>
        </div>
        <div className="user-profile">
          <div className="basic-info-header"></div>
          <div className="user-profile-form">
            <div className="right-side-profile">
              <h3>Basic Info</h3>
              <div className="name-input form-margin">
                <div className="firstname">
                  <span className="span-profile-details">First Name</span>
                  <div>
                    {disabled ? (
                      <input
                        disabled={disabled}
                        value={user_store.first_name}
                      />
                    ) : (
                      <input
                        placeholder="Your First Name"
                        onChangeCapture={(e) => {
                          user_store.setFirstName(e.target.value);
                          e.preventDefault();
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="lastname">
                  <span className="span-profile-details">Last Name</span>

                  {disabled ? (
                    <input disabled={disabled} value={user_store.last_name} />
                  ) : (
                    <input
                      placeholder="Your Last Name"
                      onChangeCapture={(e) => {
                        user_store.setLastName(e.target.value);
                        e.preventDefault();
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="form-margin">
                <span className="span-profile-details">Age</span>
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

              <div className="form-margin">
                <span className="span-profile-details">Gender</span>
                <GenderInputSelect
                  disabled={disabled}
                  gender={user_store.gender}
                />
              </div>
              <div className="form-margin">
                <span className="span-profile-details">Country</span>
                <div className="dropdown">
                  <CountryDropdown
                    disabled={disabled}
                    value={user_store.residence}
                    onChange={(val) => user_store.setResidence(val)}
                  />
                </div>
              </div>
              <div className="form-margin">
                <span className="span-profile-details">Education</span>
                <EducationLevelSelect
                  disabled={disabled}
                  education={user_store.education}
                />
              </div>
              <div>
                <span className="span-profile-details">Occupation</span>
                <JobDropDown
                  disabled={disabled}
                  occupation={user_store.occupation}
                />
              </div>
              <div className="user-profile-button">
                <div>
                  {disabled ? (
                    <button
                      onClick={() => setDisabled(!disabled)}
                      className="button-5 button-5:hover button-5:focus"
                    >
                      Edit User Profile
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setDisabled(!disabled);
                        saveUserProfile();
                      }}
                      className="button-5 button-5:hover button-5:focus"
                    >
                      Save User Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(InputFieldText);
