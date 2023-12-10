import React from "react";
import "./Customer.css";
export default function Customer() {
  return (
    <div className="content">
      <div className="hero customer-hero blue-mob-hero">
        <div className="hero-adjust">
          <h1 className="main-heading main-heading-yellow neworange">
            Customers
          </h1>
          <p className="half-p newwhite">
            TransGlobal is a powerful name in the transportation industry.
            People know TransGlobal and what we represent: one of the safest,
            most secure and reliable transportation providers in the business
            today.
          </p>
        </div>
      </div>
      <div className="halves halves-1">
        <div className="data-half data-half-customer">
          <div>
            <h2 className="customer-half-data">
              WHY CUSTOMERS CHOOSE TRANSGLOBAL
            </h2>
            <p>
              <b>Reliable Capacity:</b> All modes of domestic and global <br />
              <br />
              <b>transportation Safe Operations:</b> 99% claim-free cargo
              delivery <br />
              <br />
              <b>Cargo Security Experience:</b> High-value in-transit geo-fence
              program <br />
              <br />
              <b>Unique Business Model:</b> Experienced logistics professionals
              with a vested interest in mutual success <br />
              <br />
              <b>Sustainable Business Practices:</b>
              CTPAT, FAST, NVOCC, IATA, ISO 9001, RC 14001:2015 certifications
            </p>
          </div>
        </div>
        <div className="img-half img-half-customer"></div>
      </div>
    </div>
  );
}
