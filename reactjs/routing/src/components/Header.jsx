import React from "react";
import { useUserContext } from "../context/user.context";

function Header() {
  let { username } = useUserContext();
  return (
    <>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
          <ul className="sub-menu">
            <li>
              <NavLink to="/contact/office-1">Office-1</NavLink>
            </li>
            <li>
              <NavLink to="/contact/office-2">Office-2</NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="#">Welcome {username}</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;
