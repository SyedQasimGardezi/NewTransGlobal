import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Side.css";
import logo1 from "./logo.png";
export default function Side() {
  const [serviceMenu, setServiceMenu] = useState(false);
  const [networkMenu, setNetworkMenu] = useState(false);
  const logo = useRef();
  return (
    <div
      className="side"
      // onMouseEnter={() => {
      //   logo.current.src =
      //     "https://img.icons8.com/ios-filled/50/f2bb0d/marker.png";
      // }}
      // onMouseLeave={() => {
      //   logo.current.src =
      //     "C:UsersshahqOneDriveDesktop\react js\transglobal\frontsrcmedialogo.png";
      // }}
    >
      <Link to="/">
        <div className="side-logo">
          <img
            ref={logo}
            width="95"
            height="90"
            src={logo1}
            alt="services--v1"
          />
        </div>
      </Link>
      <div className="elements">
        <Link
          to="/Advantages"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="element-side">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/EBEBEB/truck--v1.png"
              alt="star--v1"
            />
            <h2 className="side-h2">TransGlobal Advantages</h2>
          </div>
        </Link>
        <Link
          to="/Network"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div
            onMouseEnter={() => {
              setNetworkMenu(true);
            }}
            onMouseLeave={() => {
              setNetworkMenu(false);
            }}
            className={
              networkMenu ? "element-side hover bg-change " : "element-side "
            }
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/material-outlined/50/EBEBEB/transfer-between-users.png"
              alt="network--v1"
            />
            <h2 className="side-h2">Network</h2>
          </div>
        </Link>
        <Link
          to="/Customer"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div
            onMouseEnter={() => {
              setNetworkMenu(true);
            }}
            onMouseLeave={() => {
              setNetworkMenu(false);
            }}
            className={
              networkMenu ? "element-side sub show" : "element-side sub"
            }
          >
            <h2 className="side-h2">Customers</h2>
          </div>
        </Link>
        <Link
          to="/Agent"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div
            onMouseEnter={() => {
              setNetworkMenu(true);
            }}
            onMouseLeave={() => {
              setNetworkMenu(false);
            }}
            className={
              networkMenu ? "element-side sub show " : "element-side sub "
            }
          >
            <h2 className="side-h2">Agents</h2>
          </div>
        </Link>
        <Link
          to="/Owner"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div
            onMouseEnter={() => {
              setNetworkMenu(true);
            }}
            onMouseLeave={() => {
              setNetworkMenu(false);
            }}
            className={
              networkMenu ? "element-side sub show" : "element-side sub"
            }
          >
            <h2 className="side-h2">Owner-Operators</h2>
          </div>
        </Link>
        <Link
          to="/Carrier"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div
            onMouseEnter={() => {
              setNetworkMenu(true);
            }}
            onMouseLeave={() => {
              setNetworkMenu(false);
            }}
            className={
              networkMenu ? "element-side sub show" : "element-side sub"
            }
          >
            <h2 className="side-h2">Carriers</h2>
          </div>
        </Link>

        <Link
          to="/Services"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div
            onMouseEnter={() => {
              setServiceMenu(true);
            }}
            onMouseLeave={() => {
              setServiceMenu(false);
            }}
            className={serviceMenu ? "element-side hover" : "element-side "}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/EBEBEB/services--v1.png"
              alt="services--v1"
            />

            <div className="wrapper">
              <h2 className="side-h2">Services</h2>
            </div>
          </div>
        </Link>
        <Link to="/NA" style={{ color: "inherit", textDecoration: "inherit" }}>
          <div
            onMouseEnter={() => {
              setServiceMenu(true);
            }}
            onMouseLeave={() => {
              setServiceMenu(false);
            }}
            className={
              serviceMenu ? "element-side sub show " : "element-side sub"
            }
          >
            <h2 className="side-h2">North America</h2>
          </div>
        </Link>
        <Link
          to="/Dispatch"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div
            onMouseEnter={() => {
              setServiceMenu(true);
            }}
            onMouseLeave={() => {
              setServiceMenu(false);
            }}
            className={
              serviceMenu ? "element-side sub show" : "element-side sub"
            }
          >
            <h2 className="side-h2">Dispatch Services</h2>
          </div>
        </Link>

        <Link
          to="/Contact"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="element-side">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/material-outlined/50/EBEBEB/contact-card.png"
              alt="contact-card"
            />
            <h2 className="side-h2">Contact</h2>
          </div>
        </Link>
      </div>
      <div className="side-footer">
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
  );
}
