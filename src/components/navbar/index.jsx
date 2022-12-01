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
    <div id="header">
      <div className="navbar" style={{ background: "#000000" }}>
        <input
          type="checkbox"
          className="navbar-checkbox hide-when-big"
          name=""
          id=""
        />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <a href="/">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo"/>
          <h3 style={{ float: "right" }}>SINTETIK</h3>
        </div>
        </a>
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

        <div className="flex-end">
          {app_store.is_loggedin === true ? (
            // <li>
            <button
              className="button_red_dark"
              onClick={() => {
                app_store.setShowModal(true);
              }}
            >
              <FaUserCircle /> ${chart_store.wallet}
            </button>
          ) : (
            // </li>
            <>
              {/* <li> */}
              <button
                className="button_green_dark"
                onClick={() => {
                  signup();
                }}
              >
                SIGN UP
              </button>
              {/* </li>
              <li> */}
              <button
                className="button_red_dark"
                onClick={() => {
                  signin();
                }}
              >
                SIGN IN
              </button>
              {/* </li> */}
            </>
          )}
        </div>

        {app_store.show_modal === true ? <NavModal /> : <></>}
      </div>
    </div>
  );
};

export default observer(NavBar);
