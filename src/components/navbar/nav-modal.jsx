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
  }

  // function logout() {
  // app_store.setAccessToken("");
  // localStorage.clear();
  // app_store.show_modal = false;
  // app_store.setLogin(false);
  // navigate("/", { replace: true });
  // }

  // useEffect(() => {
  //   if (app_store.confirm === true) {
  //     if (app_store.confirm === 1) {
  //       resetWallet();
  //     } else {
  //       logout();
  //     }
  //     app_store.confirm = false;
  //   }
  // }, [app_store.confirm]);

  // function resetWallet() {
  //   resetBalance(true).then((e) => {
  //     chart_store.setWallet(e);
  //     app_store.error_messages.push(
  //       `wallet has been reset, balance is now ${e}`
  //     );
  //     app_store.show_error_message = true;
  //   });
  //   app_store.show_modal = false;
  // }

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
            app_store.confirm_messages ="Your wallet will be reset to 20000.00$, are you sure you want to proceed?";
            app_store.reset = 1;
            app_store.show_confirm_message = true;
            app_store.show_modal = false;
          }}
        >
          <FaWallet /> Reset Wallet
        </li>
        <li
          onClick={() => {
            app_store.confirm_messages ="You will be logged out, do you want to proceed?";
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
