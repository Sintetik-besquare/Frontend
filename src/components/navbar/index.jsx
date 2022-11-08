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

  function signin(){
    navigate("/signin", { replace: true });
    // app_store.setLogin(true);
  }

  function signup(){
    navigate("/signup", { replace: true });
    // app_store.setLogin(true);
  }

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
                <FaUserCircle /> ${chart_store.wallet}
              </button>
            </li>
          ) : (
            <>
              <li>
                <button
                  className="button_green_dark"
                  onClick={() => {signup()}}
                >
                  SIGN UP
                </button>
              </li>
              <li>
                <button
                  className="button_red_dark"
                  onClick={() => {signin()}}
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
