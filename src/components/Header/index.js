import React from "react";

import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from "react-icons/fa"
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as action from "../../store/modules/auth/action"
import { Nav } from "./styled";

function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(action.loginFailure());
    navigate("/")
  }

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>

      {isLoggedIn ?
        (
          <Link onClick={handleDelete} to="/logout">
            <FaPowerOff size={24} />
          </Link>
        ) : (
          <Link to="/login">
            <FaSignInAlt size={24} />
          </Link>
        )
      }



      {isLoggedIn && <FaCircle size={24} color="#66ff33" />}


    </Nav >
  );
}

export default Header;