import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-content">
      <div className="contact-data">
        <div className="contact-icon">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/f2bb0d/marker.png"
            alt="marker"
          />
        </div>
        <div className="contact-text main-heading ">
          <h2>
            TransGlobal Express
            <br />
            CORPORATE HEADQUARTERS
          </h2>
          <p>
            30 N Gould Street R,
            <br /> Sheridan, WY, <br />
            82801 <br />
            <br />
            <span className="yellow">
              <div className="contact-numbers">
                <span className="neworange"> MAIN: </span>(678) 704-8057{" "}
              </div>
              <div className="contact-numbers">
                <span className="neworange">SUPPORT: </span>(678) 680-4798
                <br />
              </div>
              <div className="contact-numbers">
                <span className="neworange">FAX: </span>(678) 971-3862
              </div>
            </span>
            <br />
            <br />
            <a
              className="email-contact"
              href="mailto: hrtransglobalexpress@gmail.com"
            >
              hrtransglobalexpress@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="halves-contact">
        <div className="contact-data">
          <div className="contact-icon">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/f2bb0d/marker.png"
              alt="marker"
            />
          </div>
          <div className="contact-text main-heading ">
            <h2>
              TransGlobal Express
              <br />
              Commack Branch
            </h2>
            <p>
              18 Veterans Memorial <br />
              HWY Commack, NY <br />
              11725
              <br />
            </p>
          </div>
        </div>
        <div className="contact-data">
          <div className="contact-icon">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/f2bb0d/marker.png"
              alt="marker"
            />
          </div>
          <div className="contact-text main-heading ">
            <h2>
              TransGlobal Express
              <br />
              Sacramento, Branch
            </h2>
            <p>
              Jefferson BLVD <br />W Sacramento, CA <br />
              95691
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
