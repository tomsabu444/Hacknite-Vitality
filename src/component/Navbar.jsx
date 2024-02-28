import React from "react";

import "./Navbar.css";
import { FiLogIn } from "react-icons/fi";

function Navbar() {
  return (
    <>
      <nav>
        <h1>Logo</h1>
        <div class="navv">
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
              <a href="login.html" class="login">
                <FiLogIn />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
