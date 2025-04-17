import React from "react";
import "./Navbar.css";
import Logo from "./Logo.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

  const [showbtn, setshowbtn] = useState(false)

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img className="logo" src={Logo} alt="Logo" />
          <a id="logo-text" class="navbar-brand fw-bold mx-2" href="#">
            Resume Builder
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>{setshowbtn(!showbtn)}}
          >
           
            <span class="navbar-toggler-icon container">

             {showbtn && <span id="menuicon">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a id="li-text" class="nav-link" href="#">
                  Resume Builder App
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  Resume Examples
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  Resume Templates
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  Cover Letter Builder
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  Career Center
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  My Account
                </a>
              </li>
            </ul>
              </span>} 

            </span>
           
          </button>
          

          <div class="collapse navbar-collapse active" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  Resume Builder App
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  Resume Examples
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  Resume Templates
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  Cover Letter Builder
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  Career Center
                </a>
              </li>
              <li class="nav-item">
                <a id="li-text" class="nav-link " href="#">
                  My Account
                </a>
              </li>
            </ul>

            <button id="nav-btn" type="button" class="btn  fw-bold mt-1">
              <span>Build My Resume</span>
            </button>

            <div class="btn-group dropstart d-none">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropstart
              </button>
              <ul class="dropdown-menu"></ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
