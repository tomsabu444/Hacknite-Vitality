import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
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
          <a href="#" class="login">
            <i class="fa-solid fa-right-to-bracket"></i>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
