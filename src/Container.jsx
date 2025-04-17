import React from "react";
import "./Container.css";
import sideimage from "./side-image.png";
import Button from "./Button";
import { FaApple } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiTesla } from "react-icons/si";
import { SiGoldmansachs } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa6";

const Container = () => {
  return (
    <>
      <div id="main-div" class="container-fluid mt-2">
        <div id="row" class="row">
          <div id="first-col" class="col">
            <img
              id="image"
              class="container-fluid"
              src={sideimage}
              alt="sideimage"
            />
          </div>

          <div id="second-col" class="col container-fluid">
            <div className="heading-div" >
              <h1 className="heading">The Best Online resume Builder</h1>
            </div>

            <h2 className="h2-heading">
              Easily create a resume for any job using our best-n-class resume
              builder platform.
            </h2>

            <Button />

            <div id="mid-container" class="container-fluid">
              <div className="first-div">
                <span className="arrow">↑</span>
                <span className="percantage">38%</span>
                <p className="more-text">more interviews</p>
              </div>

              <div className="divider"></div>

              <div className="second-div">
                <span className="arrow">↑</span>
                <span className="percantage">23%</span>
                <p className="second-text">more likely to get a job offer</p>
              </div>
            </div>

            <div className="footer-div">
              <h2>Subscribers have been hired by: *</h2>
              <marquee
                behaviour="scroll"
                direction="left"
                scrollamount="8"
                className="logo-div"
              >
                <FaApple className="apple-icon" />
                <FaGoogle className="icon" />
                <FaAmazon className="icon" />
                <FaFacebookF className="icon" />
                <SiTesla className="icon" />
                <SiGoldmansachs className="icon" />
                <FaMicrosoft className="icon" />{" "}
              </marquee>
            </div>
          </div>
        </div>

        <div id="footer-text">
          <p id="first-text">Our online resume builder offers a quick and easy way to create your professional resume design templates. Whether you’re starting from scratch or refining an existing resume, our platform serves as a powerful resume generator and provides expert resume help at every step.</p>
          <p id="second-text">© 2025, Bold Limited. All rights reserved.</p>
        </div>

      </div>
    </>
  );
};

export default Container;

