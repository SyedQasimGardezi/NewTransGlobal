import React, { useRef, useState } from "react";
import "./Quote.css";
import axios from "axios";
export default function Quote() {
  const subBtn = useRef();
  const subBtnCustomer = useRef();

  const [customerformData, setCustomerFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleChangeCustomer = (e) => {
    setCustomerFormData({
      ...customerformData,
      [e.target.name]: e.target.value,
    });
  };
  const customerHandleSubmit = async (e) => {
    e.preventDefault();

    const customerformDataToSend = new FormData();
    customerformDataToSend.append("name", customerformData.name);
    customerformDataToSend.append("email", customerformData.email);
    customerformDataToSend.append("message", customerformData.message);

    try {
      const response = await axios.post(
        "http://localhost:8000/customerPost",
        customerformDataToSend
      );

      subBtnCustomer.current.style.backgroundColor = "green";
      subBtnCustomer.current.value = "Submitted";
      const formDriver = document.getElementById("myFormCustomer");
      formDriver.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const [formData, setFormData] = useState({
    textInput1: "",
    textInput2: "",
    textInput3: "",
    textInput4: "",
    textInput5: "",
    textInput6: "",
    textInput7: "",
    textInput8: "",
    textInput9: "",
    textInput10: "",
    fileInput1: null,
    fileInput2: null,
    fileInput3: null,
    fileInput4: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e, fileInput) => {
    setFormData({
      ...formData,
      [fileInput]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("textInput1", formData.textInput1);
    formDataToSend.append("textInput2", formData.textInput2);
    formDataToSend.append("textInput3", formData.textInput3);
    formDataToSend.append("textInput4", formData.textInput4);
    formDataToSend.append("textInput5", formData.textInput5);
    formDataToSend.append("textInput6", formData.textInput6);
    formDataToSend.append("textInput7", formData.textInput7);
    formDataToSend.append("textInput8", formData.textInput8);
    formDataToSend.append("textInput9", formData.textInput9);
    formDataToSend.append("textInput10", formData.textInput10);
    formDataToSend.append("fileInput1", formData.fileInput1);
    formDataToSend.append("fileInput2", formData.fileInput2);
    formDataToSend.append("fileInput3", formData.fileInput3);
    formDataToSend.append("fileInput4", formData.fileInput4);

    try {
      const response = await axios.post(
        "http://localhost:8000/submitForm",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      subBtn.current.style.backgroundColor = "green";
      subBtn.current.value = "Submitted";
      const formDriver = document.getElementById("myForm");
      formDriver.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
            TransGlobal's treatment of information that you provide through this
            website
          </p>
          <form id="myFormCustomer" onSubmit={customerHandleSubmit}>
            <div className="form-row">
              <label>Full Name*</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={handleChangeCustomer}
              />
            </div>
            <div className="form-row">
              <label>Phone*</label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                onChange={handleChangeCustomer}
              />
            </div>
            <div className="form-row">
              <label>Message*</label>
              <input
                type="text"
                name="message"
                id="message"
                onChange={handleChangeCustomer}
              />
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

              <form id="myForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="textInput1">First Name*</label>
                  <input
                    type="text"
                    id="textInput1"
                    name="textInput1"
                    value={formData.textInput1}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="textInput2">Last Name*</label>
                  <input
                    type="text"
                    id="textInput2"
                    name="textInput2"
                    value={formData.textInput2}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="textInput3">Title</label>
                  <input
                    type="text"
                    id="textInput3"
                    name="textInput3"
                    value={formData.textInput3}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="textInput4">Company*</label>
                  <input
                    type="text"
                    id="textInput4"
                    name="textInput4"
                    value={formData.textInput4}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="textInput5">Email*</label>
                  <input
                    type="text"
                    id="textInput5"
                    name="textInput5"
                    value={formData.textInput5}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="textInput6">Phone*</label>
                  <input
                    type="text"
                    id="textInput6"
                    name="textInput6"
                    value={formData.textInput6}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="textInput7">MC Number*</label>
                  <input
                    type="text"
                    id="textInput7"
                    name="textInput7"
                    value={formData.textInput7}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="textInput8">City*</label>
                  <input
                    type="text"
                    id="textInput8"
                    name="textInput8"
                    value={formData.textInput8}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="textInput9">State*</label>
                  <input
                    type="text"
                    id="textInput9"
                    name="textInput9"
                    value={formData.textInput9}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="textInput10">Zip/Postal*</label>

                  <input
                    type="text"
                    id="textInput10"
                    name="textInput10"
                    value={formData.textInput10}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="fileInput1">W9 Form*</label>
                  <input
                    type="file"
                    id="fileInput1"
                    name="fileInput1"
                    onChange={(e) => handleFileChange(e, "fileInput1")}
                    accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="fileInput2">Certificate of Insurance*</label>
                  <input
                    type="file"
                    id="fileInput2"
                    name="fileInput2"
                    onChange={(e) => handleFileChange(e, "fileInput2")}
                    accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="fileInput3">MC Authoriy*</label>
                  <input
                    type="file"
                    id="fileInput3"
                    name="fileInput3"
                    onChange={(e) => handleFileChange(e, "fileInput3")}
                    accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="fileInput4">
                    Notice of Assignment or Void Cheque*
                  </label>
                  <input
                    type="file"
                    id="fileInput4"
                    name="fileInput4"
                    onChange={(e) => handleFileChange(e, "fileInput4")}
                    accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
                    required
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
