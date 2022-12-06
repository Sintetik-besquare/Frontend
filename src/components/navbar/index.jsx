import React from "react";
import { useStores } from "../../store";
import { useNavigate, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo-sintetik.png";
import { FaUserCircle } from "react-icons/fa";
import { observer } from "mobx-react-lite";
import NavModal from "./nav-modal";

const NavBar = () => {
  const { app_store, chart_store } = useStores();
  const navigate = useNavigate();

  function signin() {
    navigate("/signin", { replace: true });
  }

  function signup() {
    navigate("/signup", { replace: true });
  }

  return (
    <div className="navbar" style={{ background: "#000000" }}>
      <input
        type="checkbox"
        className="navbar-checkbox hide-when-big"
        name=""
        id=""
      />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <div
        className="navbar-logo"
        onClick={() => navigate("/", { replace: true })}
      >
        <img src={Logo} alt="Logo" />
        <h3>SINTETIK</h3>
      </div>
      <div className="navbar-menu-list">
        <ul className="navlink">
          <HashLink smooth to="/#header" className="li">
            <li>Home</li>
          </HashLink>

          <HashLink smooth to="/#company" className="li">
            <li>About</li>
          </HashLink>

          <Link to="/trade" className="li">
            <li>Trade</li>
          </Link>

          <Link to="/news" className="li">
            <li>News</li>
          </Link>
        </ul>
      </div>

      <div style={{marginRight:"10px"}}>
       {app_store.is_loggedin === true ? (
          <button
            className="button_red_dark"
            onClick={() => {
              app_store.show_modal=true;
            }}
          >
            <FaUserCircle /> ${chart_store.wallet}
          </button>
        ) : (
          <>
            <button
              className="button_green_dark"
              onClick={() => {
                signup();
              }}
            >
              SIGN UP
            </button>

            <button
              className="button_red_dark"
              onClick={() => {
                signin();
              }}
            >
              SIGN IN
            </button>
          </>
        )}
      </div>

      {app_store.show_modal === true ? <NavModal /> : <></>}
    </div>
  );
};

export default observer(NavBar);
