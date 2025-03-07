import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Sosialhub</h1>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/posts" className={({ isActive }) => (isActive ? "active" : "")}>Posts</NavLink>
        </li>
        <li>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
        </li>
        <li>
        <NavLink to="/notifications" className={({ isActive }) => (isActive ? "active" : "")}>Notifications</NavLink>
        </li>
        <li>
        <NavLink to="/messages" className={({ isActive }) => (isActive ? "active" : "")}>Messages</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;