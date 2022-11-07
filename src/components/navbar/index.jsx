import React from "react";
import { useStores } from "../../store";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaUserCircle } from "react-icons/fa";
import { observer } from "mobx-react-lite";

import Logo from "../../assets/logo-sintetik.jpg";
import NavModal from "./nav-modal";

const NavBar = () => {
  const { app_store, main_store } = useStores();

  React.useEffect(() => {
    //rerender UI when store.isloggedin change
  }, [app_store.is_loggedin, app_store.show_modal]);

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
            <li>News</li>
          </Link>
          {app_store.is_loggedin === true ? (
            <li>
              <button
                className="button_red_dark"
                onClick={() => {
                  app_store.setShowModal(true);
                }}
              >
                <FaUserCircle /> ${main_store.wallet}
              </button>
            </li>
          ) : (
            <>
              <li>
                <button
                  className="button_green_dark"
                  onClick={() => {
                    app_store.setLogin(true);
                  }}
                >
                  SIGN UP
                </button>
              </li>
              <li>
                <button
                  className="button_red_dark"
                  onClick={() => {
                    app_store.setLogin(true);
                  }}
                >
                  SIGN IN
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {app_store.show_modal === true ? (
        <NavModal/>
      ) : (
        <></>
      )}
    </div>
  );
};

export default observer(NavBar);
