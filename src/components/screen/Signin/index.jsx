import React from "react";
import NavBar from "../../organisms/NavBar";
import useLogin from "../../../customHooks/useLogin";
import { useMutation } from "@tanstack/react-query";

/**
 *
 * @name Signin
 * @description this component shows a register form
 */
function Signin() {
  const login = useLogin();
  const registerMutation = useMutation({
    mutationFn: (data) => {
      return fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: (data) => {
      data.json().then((res) => {
        login.mutate(res);
      });
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let name = formData.get("userName");
    let email = formData.get("email");
    let password = formData.get("password");
    let avatar = "https://placehold.co/400";

    let userData = { name, email, password, avatar };
    registerMutation.mutate(userData);
  }
  return (
    <div>
      <NavBar />
      <div className="loginCard">
        <img
          className="imgLogin"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
          alt="Avatar"
          width={50}
        />
        <h1>Sign Up</h1>
        <form action="" className="col" onSubmit={handleSubmit}>
          <label className="loginLabel">Userame</label>
          <input type="text" name="userName" placeholder="person" />
          <label className="loginLabel">Email</label>
          <input type="email" name="email" placeholder="person@example.com" />
          <label className="loginLabel">Password</label>
          <input type="password" name="password" />
          <input type="submit" value="SignUp" className="loginLabel" />
        </form>
      </div>
    </div>
  );
}

export default Signin;
