import React from "react";
import NavBar from "../../organisms/NavBar";
import useLogin from "../../../customHooks/useLogin";

/**
 *
 * @name Login
 * @description component in charge of display a login form
 */
function Login() {
  const login = useLogin();

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");
    let userData = { email, password };
    login.mutate(userData);
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
        <h1>Login</h1>
        <form action="" className="col" onSubmit={handleSubmit}>
          <label className="loginLabel">Email</label>
          <input type="email" name="email" placeholder="alguien@example.com" />
          <label className="loginLabel">Password</label>
          <input type="password" name="password" />
          <input type="submit" value="Login" className="loginLabel" />
        </form>
      </div>
    </div>
  );
}

export default Login;
