import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../Sidemenu/logo.png";
export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="header-card">
      <ul className="header">
        <Link
          to="/Quote"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <li>VERIFY</li>
        </Link>
        <Link
          to="/Contact"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <li>CONTACT US</li>
        </Link>

        <Link to="/Quote">
          <button className="header-btn">Start Today</button>
        </Link>
      </ul>
      <div className={show ? "header-mobile fixed" : "header-mobile"}>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <div className="mob-logo">
            <img width="100" height="100" src={logo} alt="services--v1" />
          </div>
        </Link>
        <div className="mob-ham" onClick={() => setShow(!show)}>
          <img
            width="40"
            height="40"
            src={
              show
                ? "https://img.icons8.com/ios-glyphs/40/EBEBEB/multiply.png"
                : "https://img.icons8.com/ios-filled/40/EBEBEB/menu--v6.png"
            }
            alt="menu--v6"
          />
        </div>
      </div>
      <div
        className={show ? "mob-nav hidden" : "mob-nav"}
        onClick={() => setShow(false)}
      >
        <div className="mob-elements">
          <Link
            to="/Advantages"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/30/EBEBEB/truck--v1.png"
                alt="star--v1"
              />
              <h2>TransGlobal Advantages</h2>
            </div>
          </Link>
          <Link
            to="/Services"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/30/EBEBEB/services--v1.png"
                alt="services--v1"
              />
              <h2>Services</h2>
            </div>
          </Link>
          <Link
            to="/NA"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element sub-mob-nav">
              <div></div>
              <h2>North America</h2>
            </div>
          </Link>
          <Link
            to="/Dispatch"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element sub-mob-nav">
              <div></div>
              <h2>Dispatch Services </h2>
            </div>
          </Link>
          <Link
            to="/Network"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/material-outlined/30/EBEBEB/transfer-between-users.png"
                alt="contact-card"
              />
              <h2>Network</h2>
            </div>
          </Link>
          <Link
            to="/Customer"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element sub-mob-nav">
              <div></div>
              <h2>Customer</h2>
            </div>
          </Link>
          <Link
            to="/Agent"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element sub-mob-nav">
              <div></div>
              <h2>Agent</h2>
            </div>
          </Link>
          <Link
            to="/Owner"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element sub-mob-nav">
              <div></div>
              <h2>Owner-Operators</h2>
            </div>
          </Link>
          <Link
            to="/Carrier"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element sub-mob-nav">
              <div></div>
              <h2>Carriers</h2>
            </div>
          </Link>
          <Link
            to="/Contact"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="mob-nav-element">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/material-outlined/30/EBEBEB/contact-card.png"
                alt="contact-card"
              />
              <h2>Contact</h2>
            </div>
          </Link>
          <Link to="/Quote">
            <button className="hero-btn mob-nav-button">Start Today</button>
          </Link>
          <div className="side-footer-mob">
            <Link
              to="https://facebook.com"
              target="_blank"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/EBEBEB/facebook-new.png"
                alt="facebook-new"
              />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/EBEBEB/linkedin.png"
                alt="linkedin"
              />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/EBEBEB/instagram-new.png"
                alt="instagram-new"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
