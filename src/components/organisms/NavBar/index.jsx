import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../customHooks/useAuth";
import { fetchData } from "../../../helpers";
import { useQuery } from "@tanstack/react-query";

/**
 *
 * @name NavBar
 * @description this component rende a navBar to navigate between screens
 */
function NavBar() {
  const auth = useAuth();
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${auth?.user?.access_token}`);
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  const url = "https://api.escuelajs.co/api/v1/auth/profile";
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey: ["fetchProfile"],
    queryFn: () =>
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          auth.setIsAdmin(result?.role === "admin");
          return result;
        }),
  });

  const isAdmin = auth?.isAdmin;

  return (
    <div
      className="row"
      style={{ margin: "0px", justifyContent: "space-between" }}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
                auth.setIsAdmin(false);
              }}
            >
              LogOut
            </li>
          )}
          {isAdmin && (
            <li className="linkNavBar">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "navLink" : isActive ? "active" : ""
                }
                to="/addProduct"
              >
                Add product
              </NavLink>
            </li>
          )}
        </ul>
      )}
      <div>
        <Link to="/cartDetail">
          <img
            src="https://cdn.icon-icons.com/icons2/1473/PNG/512/035shoppingcart_101498.png"
            alt="carrito"
            width={25}
          />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
