// FormComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [formData, setFormData] = useState([]);
  // const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getData");
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const filter = formData.filter((name) => {
  //   // const fullname = name.firstname
  //   return name.lastname.toLowerCase().includes(search.toLowerCase());
  // });
  return (
    <div className="content">
      <div className="hero-adjust">
        <h2 className="h1">Data List</h2>
        {/* <input
          type="text"
          onChange={(e) => {
            setSearch(e.value);
          }}
        /> */}
        {formData.map((e, index) => {
          return (
            <Link
              to="/driver-detail"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="bar-container">
                <div className="bars">
                  <p>_id: {e._id}</p>
                  <p>
                    Name: {e.firstname} {e.lastname}
                  </p>
                  <p>Phone: {e.phone}</p>
                  <p>Email: {e.email}</p>
                </div>
              </div>
            </Link>
          );
        })}
        <br />
      </div>
    </div>
  );
};

export default Admin;
