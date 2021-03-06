import React from "react";
import "./App.css";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      {/* <h1> this is header!</h1> */}
      <div className="header__left">
        {/* <h1>This is left side</h1> */}
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        {/* home, mynetwork, notifications, etc... */}
        {/* <h1>This is right side</h1> */}
        {/* Reusable component  */}
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption
          Icon={NotificationsNoneOutlinedIcon}
          title="Notifications"
        />

        {/* Avatar */}
        {/* if user logged in, click to logout */}
        <HeaderOption
          avatar={true}
          title={user ? "Me (Click to Logout)" : "Me"}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
