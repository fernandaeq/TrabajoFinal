import { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";

/**
 *
 * @name useAuth
 * @description return auth context
 */
function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export default useAuth;
