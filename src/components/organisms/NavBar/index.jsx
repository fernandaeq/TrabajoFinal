import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../customHooks/useAuth";

/**
 *
 * @name NavBar
 * @description this component rende a navBar to navigate between screens
 */
function NavBar() {
  const auth = useAuth();
  return (
    <div style={{ margin: "0px" }}>
      <ul className="row" style={{ listStyle: "none" }}>
        <li className="linkNavBar">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "navLink" : isActive ? "active" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="linkNavBar">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "navLink" : isActive ? "active" : ""
            }
            to="/categorieList"
          >
            Categories
          </NavLink>
        </li>
        <li className="linkNavBar">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "navLink" : isActive ? "active" : ""
            }
            to={auth.user ? "/" : "/login"}
          >
            Login
          </NavLink>
        </li>
        <li className="linkNavBar">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "navLink" : isActive ? "active" : ""
            }
            to={auth.user ? "/" : "/signin"}
          >
            Sign in
          </NavLink>
        </li>
        {auth.user && (
          <li
            className="linkNavBar"
            onClick={() => {
              auth.logout(() => {});
            }}
          >
            LogOut
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
