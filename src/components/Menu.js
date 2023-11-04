import React from "react";
import { Link } from "react-router-dom";
import VerEntrenamiento from "../ui/VerEntrenamiento";

function Menu() {
  return (
    <>
      <h1 className="text-sky-600 m-10 font-light text-3xl">
        Bienvenido a SUPER BODY
      </h1>
      <Link to="/Register">
        <h1 className="ml-3 bg-blue-800 hover:bg-blue-400, inline-block mb-5 p-2 text-white uppercase font-bold">
          Registro
        </h1>
      </Link>
      <VerEntrenamiento />
    </>
  );
}

export default Menu;
