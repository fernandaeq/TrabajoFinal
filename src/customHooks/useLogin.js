import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

function useLogin() {
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const loginMutation = useMutation({
    mutationFn: (data) => {
      return fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
    onSuccess: (userData) => {
      auth.login(userData, () => {
        navigate(from, { replace: true });
      });
    },
  });

  return loginMutation;
}

export default useLogin;
