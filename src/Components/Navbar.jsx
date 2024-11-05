import React, { useState, useEffect } from "react";
import PinterestIcon from "@mui/icons-material/Pinterest";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <PinterestIcon className="navbar-logo" />
        <ul className="navbar-links">
          <NavLink to={"/"} activeClassName="active">
            <li className="set-link">Home</li>
          </NavLink>
          <NavLink to={"/explore"} activeClassName="active">
            <li className="nav-link">Explore</li>
          </NavLink>
          <NavLink to={"create"} activeClassName="active">
            <li className="nav-link">Create</li>
          </NavLink>
        </ul>
      </div>

      {!isMobile && (
        <div className="navbar-searchbar">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      )}

      <div className="navbar-right">
        {isMobile && (
          <div className="search-icon">
            <SearchIcon className="icon" />
          </div>
        )}
        <NotificationsIcon className="icon" />
        <MessageIcon className="icon" />
        <BookmarkIcon className="icon" />
        <div className="navbar-link">Saved</div>
      </div>
    </nav>
  );
};

export default Navbar;
