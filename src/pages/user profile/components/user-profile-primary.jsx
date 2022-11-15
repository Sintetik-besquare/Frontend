import React from "react";
import MobileLogin from "../../../assets/astronout.png";

function PrimaryCard() {
  return (
    <>
      <div className="user-profile-primary-card">
        <div>
          <img src={MobileLogin} alt="N/A" style={{ width: "10vw" }} />
        </div>
        <div className="span-details-container">
          <h1>
            <span className="span-main-details">email</span>
            aaron@gmail.com
          </h1>
          <h1>
            <span className="span-main-details">client id</span>
            #Sintetik12345
          </h1>
          <h1>
            <span className="span-main-details">joined since</span>
            12 June 2020
          </h1>
        </div>
      </div>
      ;
    </>
  );
}

export default PrimaryCard;
