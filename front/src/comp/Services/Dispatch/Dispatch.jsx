import React from "react";
import { Link } from "react-router-dom";
import "./Dispatch.css";
export default function Dispatch() {
  return (
    <div className="content">
      <div className="hero dispatch-hero blue-mob-hero">
        <div className="hero-adjust">
          <h1 className="main-heading main-heading-blue white">
            Our Dispatch Services
          </h1>
          <p className="half-p white">
            TransGlobal is a powerful name in the transportation industry.
            People know TransGlobal and what we represent: one of the safest,
            most secure and reliable transportation providers in the business
            today.
          </p>
        </div>
      </div>
      <div className="halves-dispatch ">
        <div className="data-half data-half-customer">
          <div>
            <h2 className="customer-half-data">
              TransGlobal Dispatch Services
            </h2>
            <p>
              Are you an owner operator searching for Truck Dispatch Company?
              Are you a Trucking Company in need of the best Truck Dispatcher
              Service in USA? UTD provides Independent Dispatch Services in
              North America and the United States USA Truck Dispatch handles all
              back office paperwork, detention collection, and factoring,
              invoicing, and all other admin tasks. We discover the most active
              loads required for your freight wants and acquire the best rate
              available according to the market condition. We propose modified
              Dispatch Service after a watchful enquiry of our customer’s
              necessity’s at any given time. At UTD, we offer you the finest
              possible freight rate for any truckload you may have and be
              careful of any problems that may arise while driving. We are a
              self-governing Semi Truck Dispatch Company in North America that
              supports you and find the best conceivable loads in the market….
            </p>
            <Link to="/Quote">
              <button className="hero-btn">Start Today</button>
            </Link>
          </div>
        </div>
        <div className="img-half img-half-dispatch"></div>
      </div>
    </div>
  );
}
