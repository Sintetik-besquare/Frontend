import React from "react";
import { useStores } from "../../store";
import { observer } from "mobx-react-lite";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCircle, FaWallet } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const NavModal = () => {
  const { app_store } = useStores();

  React.useEffect(() => {
    //rerender UI when store.isloggedin change
  }, [app_store.show_modal]);

  return (
    <div className="nav_modal">
      <MdOutlineClose
        className="button_red_light"
        onClick={() => {
          app_store.setShowModal(false);
        }}
      />
      <ul>
        <li onClick={()=>{alert("View Profile")}}><FaUserCircle/> View Profile</li>
        <li onClick={()=>{alert("Reset Wallet")}}><FaWallet/> Reset Wallet</li>
        <li onClick={()=>{alert("logout")}}><MdLogout/> Logout</li>
      </ul>
    </div>
  );
};

export default observer(NavModal);
