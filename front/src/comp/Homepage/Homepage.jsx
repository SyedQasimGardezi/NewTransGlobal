import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
export default function Homepage() {
  return (
    <div className="content">
      <div className="hero homepage-hero blue-mob-hero">
        <div className="hero-adjust">
          <h1 className="main-heading main-heading-blue newwhite heading-small">
            DESIGNED TO <br />
            RESPOND <br /> BUILT TO DELIVER
          </h1>
          <p className="newwhite">
            TransGlobal Express LLC. <br />
            A Safety First Transportation
            <br /> Solutions Provider <br />
          </p>
          <Link
            to="/Advantages"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <button className="hero-btn">Why TransGlobal?</button>
          </Link>
        </div>
      </div>
      <div className="halves halves-1">
        <div className="data-half data-half-1">
          <div>
            <h2 className="h1 main-heading main-heading-yellow">About Us</h2>
            <p>
              TransGlobal stands for safe, secure and reliable transportation
              services delivered by a network of independent freight agents,
              leased owner-operators and other third-party capacity providers.
              We empower these entrepreneurs to offer customized shipping
              solutions.
            </p>
            <div className="buttons">
              <Link
                to="/NA"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <button className="header-btn">Services</button>
              </Link>
              <Link
                to="/Network"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <button className="hero-btn">Our Network</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="img-half img-half-1"></div>
      </div>
      <div className="halves halves-2">
        <div className="img-half img-half-2"></div>
        <div className="data-half data-half-2">
          <div>
            <h2 className="h1 main-heading main-heading-yellow">
              CORPORATE INFORMATION
            </h2>
            <p>
              TransGlobal Express, LLC., a Fortune 500 company, is a worldwide,
              technology-enabled, asset-light provider of integrated
              transportation management solutions delivering safe, specialized
              transportation services to a broad range of customers utilizing a
              network of agents, third-party capacity owners and employees.
            </p>
            <Link
              to="/Advantages"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <button className="hero-btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
