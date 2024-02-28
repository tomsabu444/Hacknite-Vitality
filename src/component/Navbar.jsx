import React from "react";
import "./Navbar.css";
import { FiLogIn } from "react-icons/fi";

function Navbar() {
  return (
    <>
      <div className="nav">
        <h1>LOGO</h1>
        <ul>
          <li>
            <a href="#" id="one">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#" className="login">
              <FiLogIn />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
