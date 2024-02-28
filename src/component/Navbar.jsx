import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div>
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
              <i className="fa-solid fa-right-to-bracket"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
