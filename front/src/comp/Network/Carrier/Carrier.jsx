import React from "react";
import "./Carrier.css";
export default function Carrier() {
  return (
    <div className="content">
      <div className="hero carrier-hero blue-mob-hero">
        <div className="hero-adjust">
          <h1 className="main-heading main-heading-yellow">Carriers</h1>
          <p className="half-p">
            If you can get the job done safely and keep your customers happy,
            then TransGlobal is the place to grow.
          </p>
        </div>
      </div>
      <div className="halves halves-2">
        <div className="data-half data-half-agent">
          <div>
            <div>
              <h2 className="customer-half-data">FAST PAY</h2>
              <p>
                Cash flow can be critical. That’s why we offer our two-day
                electronic settlement option: Pay2Day. You won’t be chasing
                invoices or waiting for payments.
              </p>
            </div>
            <div>
              <h2 className="customer-half-data">
                POST YOUR TRUCKS AND CONNECT WITH AGENTS
              </h2>
              <p>
                Tell us if your truck is available and the network of
                TransGlobal’s independent agents will help you find the freight.
              </p>
            </div>
            <div>
              <h2 className="customer-half-data">
                ALL KINDS OF FREIGHT TO FILL YOUR TRAILERS
              </h2>
              <p>
                Every kind of freight, every kind of way. Whatever equipment you
                have, we've got a shipment that needs it. Take a step up with
                TransGlobal.
              </p>
            </div>
          </div>
        </div>
        <div className="img-half img-half-carrier img-heading-half ">
          <h2 className="h1 ">Why TransGlobal?</h2>
        </div>
      </div>
    </div>
  );
}
