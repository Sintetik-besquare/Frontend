import React from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCircle, FaWallet } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const NavModal = () => {
  const { app_store, chart_store } = useStores();
  const navigate = useNavigate();

  function viewProfile() {
    navigate("/trade", { replace: true });
    app_store.setShowModal(false);
  }

  function logout() {
    app_store.setAccessToken("");
    localStorage.clear();
    app_store.setShowModal(false);
    app_store.setLogin(false);
  }

  function resetWallet() {
    chart_store.resetWallet();
    alert("wallet resetted");
    app_store.setShowModal(false);
  }

  return (
    <div className="nav_modal">
      <MdOutlineClose
        className="button_red_light"
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
            if (window.confirm("Are you sure you wish to reset your wallet ?"))
              resetWallet();
          }}
        >
          <FaWallet /> Reset Wallet
        </li>
        <li
          onClick={() => {
            if (window.confirm("Are you sure you wish to logout ?")) logout();
          }}
        >
          <MdLogout /> Logout
        </li>
      </ul>
    </div>
  );
};

export default observer(NavModal);
