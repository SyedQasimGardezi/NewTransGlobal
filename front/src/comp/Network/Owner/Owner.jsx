import React from "react";
import "./Owner.css";
export default function Owner() {
  return (
    <div className="content">
      <div className="hero owner-hero blue-mob-hero">
        <div className="hero-adjust">
          <h1 className="main-heading main-heading-blue neworange">
            OWNER-OPERATORS
          </h1>
          <p className="half-p newwhite">
            With TransGlobal, you’re in control. You've never known freedom like
            this before.
          </p>
        </div>
      </div>
      <div className="halves halves-1">
        <div className="data-half data-half-agent">
          <div>
            <div>
              <h2 className="customer-half-data">FREEDOM: BE YOUR OWN BOSS</h2>
              <p>
                With TransGlobal you are your own boss, you choose what you want
                to haul, when to haul and when to return home. We won't get in
                your way.
              </p>
            </div>
            <div>
              <h2 className="customer-half-data">
                SECURITY: YOU’LL ALWAYS BE IN DEMAND
              </h2>
              <p>
                There are thousands of loads available every day. There's always
                something waiting for you.
              </p>
            </div>
            <div>
              <h2 className="customer-half-data">
                SUPPORT: WE’LL HELP YOU ALL THE WAY
              </h2>
              <p>
                TransGlobal is committed to your success. We'll help you get to
                where you're going - because that helps us get to where we're
                going.
              </p>
            </div>
          </div>
        </div>
        <div className="img-half img-half-owner"></div>
      </div>
    </div>
  );
}
