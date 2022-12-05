import React from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCircle, FaWallet } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { resetBalance } from "../../services/wallet";
const NavModal = () => {
  const { app_store, chart_store } = useStores();
  const navigate = useNavigate();

  function viewProfile() {
    navigate("/profile", { replace: true });
    app_store.setShowModal(false);
  }

  function logout() {
    app_store.setAccessToken("");
    localStorage.clear();
    app_store.setShowModal(false);
    app_store.setLogin(false);
    navigate("/", { replace: true });
  }

  function resetWallet() {
    resetBalance(true)
    .then((e) => {
      chart_store.setWallet(e);
      alert(`wallet has been reset, balance is now ${e}`);
    });
    app_store.setShowModal(false);
  }

  return (
    <div className="nav_modal">
      <MdOutlineClose
        className="btn_close_nav"
        onClick={() => {
          app_store.setShowModal(false);
        }}
      />
      <ul>
        <li
          onClick={() => {
            viewProfile();
          }}
        >
          <FaUserCircle /> View Profile
        </li>
        <li
          onClick={() => {
            if (
              window.confirm(
                "Your wallet will be reset to 20,000$, are you sure you want to proceed? "
              )
            )
              resetWallet();
          }}
        >
          <FaWallet /> Reset Wallet
        </li>
        <li
          onClick={() => {
            if (
              window.confirm("You will be logged out, do you want to proceed?")
            )
              logout();
          }}
        >
          <MdLogout /> Logout
        </li>
      </ul>
    </div>
  );
};

export default observer(NavModal);
