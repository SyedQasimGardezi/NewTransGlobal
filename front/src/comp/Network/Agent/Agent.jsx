import React from "react";
import "./Agent.css";
export default function Agent() {
  return (
    <div className="content">
      <div className="hero agent-hero blue-mob-hero">
        <div className="hero-adjust">
          <h1 className="main-heading main-heading-blue newwhite">Agents</h1>
          <p className="half-p newwhite">
            Every TransGlobal agent is an independent business owner with the
            tools and support of a multibillion-dollar, Fortune 500 company.
          </p>
        </div>
      </div>
      <div className="halves halves-1">
        <div className="data-half data-half-agent">
          <div>
            <div>
              <h2 className="customer-half-data">
                NO LIMITS TO WHAT YOU CAN EARN
              </h2>
              <p>
                The TransGlobal business model is built to help you flourish.
                With our backing, you can take your business and earnings to the
                next level.
              </p>
            </div>
            <div>
              <h2 className="customer-half-data">
                FREEDOM TO SET YOUR OWN PRIORITIES
              </h2>
              <p>
                Running your own business is hard work - but it also gives you
                the freedom to operate the way you want to, fitting into the
                life you want to lead.
              </p>
            </div>
            <div>
              <h2 className="customer-half-data">
                TRANSGLOBAL SUPPORT TO HELP YOU SUCCEED
              </h2>
              <p>
                With TransGlobal, you have the backing of an industry leader.
                Our success is based on your success - we're fully committed to
                helping your freight agency grow.
              </p>
            </div>
          </div>
        </div>
        <div className="img-half img-half-agent"></div>
      </div>
    </div>
  );
}
