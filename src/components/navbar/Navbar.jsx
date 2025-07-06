import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
            alt="logo"
          />
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Features</span>
          <span>Pricing</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
        <div className="right">
          <SearchIcon className="icon"/>
          <span>KID</span>
          <NotificationsIcon className="icon"/>
          <img
            src="https://miaobi-lite.bj.bcebos.com/miaobi/5mao/b%276Jyh56yU5bCP5paw5oOF5L6j5aS05YOPXzE3Mjg5NDgyODguMjQ1MjcyMg%3D%3D%27/0.png"
            alt=""
          />
          <div className="profile">

          <ArrowDropDownIcon className="icon"/>
          <div className="optional">
            <span>Settings</span>
            <span>Logout</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
