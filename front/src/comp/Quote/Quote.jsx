import React, { useRef, useState } from "react";
import "./Quote.css";
import axios from "axios";
export default function Quote() {
  const [form, setForm] = useState([]);
  const [customerform, setCustomerform] = useState([]);
  const subBtn = useRef();
  const subBtnCustomer = useRef();
  function handleFormCustomer(e) {
    setCustomerform({ ...customerform, [e.target.name]: e.target.value });
  }
  function handleFormDriver(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmitCustomer(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/customer",
        {
          customerform: customerform,
        },
        ((subBtnCustomer.current.value = "SUBMITTED"),
        (subBtnCustomer.current.style.backgroundColor = "green"),
        document.getElementById("myFormCustomer").reset())
      )
      .catch(function (error) {
        console.log("error: " + error);
      });
  }
  async function handleSubmitDriver(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/driver",
        {
          form: form,
        },
        ((subBtn.current.value = "SUBMITTED"),
        (subBtn.current.style.backgroundColor = "green"),
        document.getElementById("myForm").reset())
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="hero-adjust mob-hero-adjust na-heading">
        <h1 className="quote-h1 main-heading main-heading-yellow">
          Signup With Us
        </h1>
      </div>
      <div className="halves-form">
        <div className="customer-half">
          <h2 className="form-heading">For Customer</h2>
          <p>
            The information below will assist TransGlobal in understanding your
            freight needs. Please provide as much information as possible about
            your freight or shipping needs - date, description of product,
            size/weight of over-dimensional freight, etc. For information on
            Landstar's treatment of information that you provide through this
            website
          </p>
          <form id="myFormCustomer" onSubmit={handleSubmitCustomer}>
            <div className="form-row">
              <label>Full Name*</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                required
                onChange={handleFormCustomer}
              />
            </div>
            <div className="form-row">
              <label>Phone*</label>
              <input
                type="text"
                name="customerphone"
                id="customerphone"
                required
                onChange={handleFormCustomer}
              />
            </div>
            <div className="form-row">
              <label>Message*</label>
              <textarea
                name="customermessage"
                id="customermessage"
                cols="30"
                rows="52"
                style={{ resize: "none" }}
                onChange={handleFormCustomer}
              ></textarea>
            </div>
            <div className="submit-row">
              <input
                ref={subBtnCustomer}
                type="submit"
                value="submit"
                className="submit-btn"
              />
            </div>
          </form>
        </div>
        <div className="driver-half">
          <div className="quote">
            <div className="form">
              <h2 className="form-heading">For Driver Signup</h2>

              <form id="myForm" onSubmit={handleSubmitDriver}>
                <div className="form-row">
                  <label>First Name*</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={handleFormDriver}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>Company*</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>E-mail*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>City*</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>State*</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>MC or Dot Number*</label>
                  <input
                    type="text"
                    name="mcnumber"
                    id="mcnumber"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>Zip/Postal*</label>
                  <input
                    type="number"
                    name="zip"
                    id="zip"
                    title="Invalid Zip"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>Phone*</label>
                  <input
                    type="text"
                    pattern="[0-9]{10,15}"
                    title="Enter Valid Number"
                    name="phone"
                    id="phone"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>W-9 Form*</label>
                  <input
                    type="file"
                    name="w9form"
                    id="w9form"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>Certificate of Insurance*</label>
                  <input
                    type="file"
                    name="coi"
                    id="coi"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>MC Authority*</label>
                  <input
                    type="file"
                    name="mc"
                    id="mc"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="form-row">
                  <label>Notice of Assignment/Void Cheque*</label>
                  <input
                    type="file"
                    name="noa"
                    id="noa"
                    required
                    onChange={handleFormDriver}
                  />
                </div>
                <div className="submit-row">
                  <input
                    ref={subBtn}
                    type="submit"
                    value="submit"
                    className="submit-btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
