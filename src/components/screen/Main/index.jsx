import React from "react";
import NavBar from "../../organisms/NavBar";
import "../../../styles/index.css";
import useAuth from "../../../customHooks/useAuth";

function Main() {
  const auth = useAuth();

  return (
    <div>
      <h1>HomePage</h1>
      <p>Aca puede ir una descripcion</p>
    </div>
  );
}

export default Main;
