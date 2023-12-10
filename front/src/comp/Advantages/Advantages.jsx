import React from "react";
import "./Advantages.css";
export default function Advantages() {
  return (
    <div className="content">
      <div className="hero hero-advantage blue-mob-hero">
        <div className="hero-adjust">
          <h1 className="adv-h1 main-heading main-heading-yellow">
            WHY <br />
            TRANSGLOBAL?
          </h1>
          <p className="adv-p">
            The Transglobal business model is a unique network of agents and
            capacity providers. Discover how we deliver customized
            transportation solutions better than anyone else.
          </p>
        </div>
      </div>
      <div className="halves Halves-1">
        <div className="data-half data-half-adv-1">
          <div>
            <h2 className="h1 main-heading main-heading-yellow">
              A NETWORK BUILT TO DELIVER
            </h2>
            <p>
              TransGlobal is a global transportation system built for the 21st
              century. Compared to an ordinary logistics business, our network
              of independent agents and capacity providers offer greater
              flexibility to meet customers’ needs.
            </p>
          </div>
        </div>
        <div className="img-half img-half-adv-1">
          <img
            className="adv-1-img"
            src="https://www.landstar.com/Content/img/infographic.png"
            alt="information Graphical"
          />
        </div>
      </div>
      <div className="halves halves-2">
        <div className="data-half data-half-adv-2">
          <div>
            <p>
              Transglobal's scale, systems and support, combined with our
              proprietary technology, help us to provide unparalleled value to
              our customers. Our technology and mobile apps make it easier to
              coordinate freight shipments. We are a leader in digital freight
              management, not mere digital load matching. <br />
              <br /> With technology like the TransGlobal website, capacity
              providers can easily find and set Load Alerts® notifications for
              potential loads from our freight board that meet their criteria.{" "}
              <br />
              <br /> We’ve developed technology for agents that provides
              real-time data about their businesses and trends in their
              customers’ businesses. The results are tools that provide agents
              with in-depth analytics, solid data on pricing, and access to
              available capacity so they are empowered to provide superior
              service to customers.
            </p>
          </div>
        </div>
        <div className="img-half img-half-adv-2 img-heading-half">
          <h2 className="h1 yellow main-heading main-heading-yellow">
            TOOLS & <br />
            TECHNOLOGY
          </h2>
        </div>
      </div>
    </div>
  );
}
