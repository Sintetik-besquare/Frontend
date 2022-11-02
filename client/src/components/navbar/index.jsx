import React from "react";
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo-sintetik.jpg";
import clientStore from "../../store/client-store";


function NavBar() {
  return (
    <div className="flex" style={{ background: "black" }}>
      <div>
        <HashLink smooth to="/#home">
          <img src={Logo} alt="Logo" style={{ width: 50 }} />
        </HashLink>
      </div>
      <div>
        <ul className="navbar">
          <HashLink smooth to="/#home" className="li">
            <li>Home</li>
          </HashLink>

          <HashLink smooth to="/#about" className="li">
            <li>About</li>
          </HashLink>

          <Link to="/trade" className="li">
            <li>Trade</li>
          </Link>

          <Link to="/news" className="li">
            <li> News</li>
          </Link>
          {clientStore.loggedin === true ? (
            <li>
              <button className="button-red" onClick={()=>{clientStore.logout()}}>LOG OUT</button>
            </li>
          ) : (
            <>
              <li>
                <button className="button-green">SIGN UP</button>
              </li>
              <li>
                <button className="button-red" onClick={()=>{clientStore.login()}}>SIGN IN</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default observer(NavBar);
