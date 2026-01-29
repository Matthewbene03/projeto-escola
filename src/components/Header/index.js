import React from "react";

import {FaHome, FaSignInAlt, FaUserAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Nav } from "./styled";

function Header(){
  const botaoClicado = useSelector(state => state.myReducer.botaoClicado);

  return(
    <Nav>
      <Link to="/">
        <FaHome size={24}/>
      </Link>
      <Link to="/login">
        <FaUserAlt size={24}/>
      </Link>
      <Link to="/sair">
        <FaSignInAlt size={24}/>
      </Link>
      {botaoClicado ? "clicado" : "não clicado"}
    </Nav>
  );
}

export default Header;