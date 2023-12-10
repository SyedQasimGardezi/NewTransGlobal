import React from "react";
import "./Network.css";
import { Link } from "react-router-dom";
export default function Network() {
  return (
    <div className="content-service">
      <div className="service">
        <h1 className="ser-heading-mob ">Our Network</h1>
        <Link
          to="/Customer"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="service-l network-img-customer">
            <h1 className="ser-heading net-heading">Our Network</h1>
            <div className="ser-data ser-data-network">
              <h2 className="ser-h2">Customers</h2>
              <p className="p-hidden">
                What we haul may change, but one thing remains the same: our
                unwavering commitment to high-quality service and safety.
              </p>
              <p>
                . <br />. <br />. <br />
              </p>
              <button className="hero-btn">LEARN MORE</button>
            </div>
          </div>
        </Link>
        <Link
          to="/Agent"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="service-l network-img-agent">
            <div className="ser-data ser-data-network">
              <h2 className="ser-h2">Agents</h2>
              <p className="p-hidden">
                TransGlobal network of 108,000+ capacity providers, and
                communicate with customers every step of the way.
              </p>
              <p>
                . <br />. <br />. <br />
              </p>
              <button className="header-btn">LEARN MORE</button>
            </div>
          </div>
        </Link>
        <Link
          to="/Owner"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="service-l network-img-owner">
            <div className="ser-data ser-data-network">
              <h2 className="ser-h2">Owner Operators</h2>
              <p className="p-hidden">
                With TransGlobal, you are your own boss. You choose what you
                want to haul, when to haul and when to return home. We won't get
                in your way.
              </p>
              <p>
                . <br />. <br />. <br />
              </p>
              <button className="hero-btn">LEARN MORE</button>
            </div>
          </div>
        </Link>
        <Link
          to="/Carrier"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="service-r network-img-carrier">
            <div className="ser-data ser-data-network">
              <h2 className="ser-h2">Carriers</h2>
              <p className="p-hidden">
                Every kind of freight, every kind of way. Whatever equipment you
                have, we've got a shipment that needs it. Take a step up with
                TransGlobal.
              </p>

              <p>
                . <br />. <br />. <br />
              </p>
              <button className="header-btn">LEARN MORE</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
