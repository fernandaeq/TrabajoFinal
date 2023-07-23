import { createContext, useState } from "react";

export let AuthContext = createContext();
export const ACCESS_TOKEN = "access_token";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("access_token"));
  const [isAdmin, setIsAdmin] = useState(false);
  /**
   *
   * @name login
   * @description function in charge of set user and set storage
   *
   */
  function login(userData, callback) {
    setUser(userData);
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(userData.access_token));
    // localStorage.setItem(isAdmin, JSON.stringify(userData.access_token));
    callback();
  }

  /**
   *
   * @name logout
   * @description this function set user in null and remove from local storage
   *
   */
  function logout(callback) {
    setUser(null);
    localStorage.removeItem("access_token");
    callback();
  }

  const value = { user, login, logout, isAdmin, setIsAdmin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
