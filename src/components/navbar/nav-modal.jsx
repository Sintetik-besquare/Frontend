import React from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCircle, FaWallet } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { resetBalance } from "../../services/wallet";
import { useEffect } from "react";
const NavModal = () => {
  const { app_store, chart_store } = useStores();
  const navigate = useNavigate();

  function viewProfile() {
    navigate("/profile", { replace: true });
    app_store.show_modal = false;
    app_store.show_error_message = false;
    app_store.show_confirm_message = false;
  }

  return (
    <div className="nav_modal">
      <MdOutlineClose
        className="btn_close_nav"
        onClick={() => {
          app_store.show_modal = false;
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
            app_store.confirm_messages =
              "Your wallet will be reset to 20000.00$, are you sure you want to proceed?";
            app_store.reset = 1;
            app_store.show_confirm_message = true;
            app_store.show_modal = false;
          }}
        >
          <FaWallet /> Reset Wallet
        </li>
        <li
          onClick={() => {
            app_store.confirm_messages =
              "You will be logged out, do you want to proceed?";
            app_store.reset = 2;
            app_store.show_confirm_message = true;
            app_store.show_modal = false;
          }}
        >
          <MdLogout /> Logout
        </li>
      </ul>
    </div>
  );
};

export default observer(NavModal);
