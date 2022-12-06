import React, { useEffect } from "react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import JobDropDown from "./joblist";
import { CountryDropdown } from "react-country-region-selector";
import { editUserDetails } from "../../../services/user-info";
import EducationLevelSelect from "./educationlevel";
import GenderInputSelect from "./genderinput";
import Astronout from "../../../assets/profile.png";

const InputFieldText = () => {
  const { user_store } = useStores();
  const [updateProfilePromise, setUpdateProfilePromise] = useState(null);
  const [updateIntegerAgePromise, setUpdateIntegerAgePromise] = useState(null);
  let error_message = [];

  //Edit profile button function
  const [disabled, setDisabled] = useState(true);

  //Alert - error in submitting user details
  useEffect(() => {
    updateProfilePromise
      ?.then((z) => {
        if (typeof z === "string") {
          user_store.setFirstName(z);
        } else {
          z.forEach((e) => {
            error_message.push(e.msg);
          });
          alert(error_message.join("\n \n"));
        }
      })
      .then(saveUserProfile());
    error_message = [];
  }, [user_store, updateProfilePromise]);

  useEffect(() => {
    updateIntegerAgePromise
      ?.then((z) => {
        if (typeof z === "number") {
          user_store.setAge(z);
        } else {
          z.forEach((e) => {
            error_message.push(e.msg);
          });
          alert(error_message.join("\n"));
        }
      })
      .then(saveUserProfile());
    error_message = [];
    console.log("Hello", error_message);
  }, [user_store, updateIntegerAgePromise]);

  //Avoiding circular reference error when submitting user update profile
  // const getCircularReplacer = () => {
  //   const seen = new WeakSet();
  //   return (key, value) => {
  //     if (typeof value === "object" && value !== null) {
  //       if (seen.has(value)) {
  //         return;
  //       }
  //       seen.add(value);
  //     }
  //     return value;
  //   };
  // };

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

    try {
      await editUserDetails(user_details);
      alert("Your profile has been updated");
      console.log("user details", user_details);
      // editUserDetails(JSON.stringify(user_details, getCircularReplacer()));
      // alert("Your profile is updated");
    } catch (err) {
      console.log("Error handling:", err);
    }
  }

  return (
    <>
      <div className="user-profile-flex">
        <div className="left-profile">
          <center>Profile</center>
          <img src={Astronout} alt="a profile page" style={{ width: "40%" }} />
          <p className="email">{user_store.email}</p>
          {user_store.date_join !== "" && (
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
          )}

          {user_store.client_id !== "" && (
            <p className="join">
              Client ID<br></br>
              <span className="join-span">{user_store.client_id}</span>
            </p>
          )}
        </div>
        <div className="user-profile">
          <div className="basic-info-header"></div>
          <div className="user-profile-form">
            <div className="right-side-profile">
              <h3>Basic Info</h3>
              <form
                className="name-form"
                onSubmit={function (e) {
                  e.preventDefault();
                  /**
                   * @type {HTMLFormElement}
                   */
                  const form = e.nativeEvent.target;
                  setUpdateProfilePromise(
                    editUserDetails(form.elements["firstname"].value)
                  );
                }}
              >
                <div className="name-input form-margin">
                  <div className="firstname">
                    <span className="span-profile-details">First Name</span>
                    <div>
                      {disabled ? (
                        <input
                          name="firstname"
                          disabled={disabled}
                          value={user_store.first_name}
                        />
                      ) : (
                        <input
                          name="firstname"
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
                      <input
                        name="lastname"
                        disabled={disabled}
                        value={user_store.last_name}
                      />
                    ) : (
                      <input
                        name="lastname"
                        placeholder="Your Last Name"
                        onChangeCapture={(e) => {
                          user_store.setLastName(e.target.value);
                          e.preventDefault();
                        }}
                      />
                    )}
                  </div>
                </div>
              </form>

              <form
                className="age-form"
                onSubmit={function (e) {
                  e.preventDefault();
                  /**
                   * @type {HTMLFormElement}
                   */
                  const form = e.nativeEvent.target;
                  setUpdateIntegerAgePromise(
                    editUserDetails(form.elements["age"].value)
                  );
                }}
              >
                <div className="form-margin">
                  <span className="span-profile-details">Age</span>
                  {disabled ? (
                    <input disabled={disabled} value={user_store.age} />
                  ) : (
                    <input
                      name="age"
                      type="number"
                      placeholder="Your Age"
                      onChange={(e) => {
                        user_store.setAge(parseInt(e.target.value));
                        e.preventDefault();
                      }}
                    />
                  )}
                </div>
              </form>

              <div className="form-margin">
                <span className="span-profile-details">Gender</span>
                <GenderInputSelect
                  disabled={disabled}
                  value={user_store.gender}
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
                  value={user_store.education}
                  onChange={(val) => user_store.setEducation(val)}
                />
              </div>
              <div>
                <span className="span-profile-details">Occupation</span>
                <JobDropDown
                  disabled={disabled}
                  value={user_store.occupation}
                  onChange={(val) => user_store.setOccupation(val)}
                />
              </div>
              <div className="user-profile-button">
                <div>
                  {disabled ? (
                    <button
                      onClick={() => {
                        setDisabled(!disabled);
                      }}
                      className="button-5 button-5:hover button-5:focus"
                    >
                      Edit User Profile
                    </button>
                  ) : (
                    <button
                      name="submit"
                      onClick={async () => {
                        setDisabled(!disabled);
                        await saveUserProfile();
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
