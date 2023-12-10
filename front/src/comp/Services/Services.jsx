import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <div className="content-service">
      <div className="service">
        <h1 className="ser-heading-mob">SERVICES</h1>
        <Link to="/NA" style={{ color: "inherit", textDecoration: "inherit" }}>
          <div className="service-l service-l-img">
            <h1 className="ser-heading">SERVICES</h1>
            <div className="ser-data">
              <h2 className="ser-h2">North American Services</h2>
              <p className="p-hidden">
                The TransGlobal network is unmatched in the industry. With over
                1,100 agents, 10,300 leased owner-operators, 18,500 trailers and
                97,700 other approved capacity providers, we have a solution to
                your transportation challenge.
              </p>
              <p>
                . <br />. <br />. <br />
              </p>
              <button className="hero-btn">LEARN MORE</button>
            </div>
          </div>
        </Link>
        <Link
          to="/Dispatch"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="service-r service-r-img">
            <div className="ser-data">
              <h2 className="ser-h2">TransGlobal Dispatch Service</h2>
              <p className="p-hidden">
                Are you an owner operator searching for Truck Dispatch Company?
                Are you a Trucking Company in need of the best Truck Dispatcher
                Service in USA?
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
