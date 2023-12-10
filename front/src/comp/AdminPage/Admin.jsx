import React from "react";

import "./Admin.css";
export default function Admin() {
  return (
    <div>
      <form
        action="http://localhost:8000/upload"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" name="file" id="file" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
