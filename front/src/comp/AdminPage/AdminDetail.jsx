import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
export default function AdminDetail({ _id }) {
  const [fileUrls, setFileUrls] = useState({
    fileUrl1: "",
    fileUrl2: "",
    fileUrl3: "",
    fileUrl4: "",
  });

  const [fileTypes, setFileTypes] = useState({
    fileType1: "",
    fileType2: "",
    fileType3: "",
    fileType4: "",
  });
  useEffect(() => {
    async function get() {
      try {
        const response1 = await axios.get(
          `http://localhost:8000/getFile/657f772057b349d1c2726565/1`,
          {
            responseType: "arraybuffer",
          }
        );

        const blob1 = new Blob([response1.data], {
          type: response1.headers["content-type"],
        });
        const url1 = URL.createObjectURL(blob1);

        setFileUrls({ ...fileUrls, fileUrl1: url1 });
        setFileTypes({
          ...fileTypes,
          fileType1: response1.headers["content-type"],
        });

        const response2 = await axios.get(
          `/api/getFile/657f772057b349d1c2726565/2`,
          {
            responseType: "arraybuffer",
          }
        );

        const blob2 = new Blob([response2.data], {
          type: response2.headers["content-type"],
        });
        const url2 = URL.createObjectURL(blob2);

        setFileUrls({ ...fileUrls, fileUrl2: url2 });
        setFileTypes({
          ...fileTypes,
          fileType2: response2.headers["content-type"],
        });

        const response3 = await axios.get(
          `/api/getFile/657f772057b349d1c2726565/3`,
          {
            responseType: "arraybuffer",
          }
        );

        const blob3 = new Blob([response3.data], {
          type: response3.headers["content-type"],
        });
        const url3 = URL.createObjectURL(blob3);

        setFileUrls({ ...fileUrls, fileUrl3: url3 });
        setFileTypes({
          ...fileTypes,
          fileType3: response3.headers["content-type"],
        });

        const response4 = await axios.get(
          `/api/getFile/657f772057b349d1c2726565/4`,
          {
            responseType: "arraybuffer",
          }
        );

        const blob4 = new Blob([response4.data], {
          type: response4.headers["content-type"],
        });
        const url4 = URL.createObjectURL(blob4);

        setFileUrls({ ...fileUrls, fileUrl4: url4 });
        setFileTypes({
          ...fileTypes,
          fileType4: response4.headers["content-type"],
        });
      } catch (error) {
        console.error("Error retrieving files:", error);
      }
    }
    get();
  }, [fileUrls]);
  return (
    <div>
      {fileUrls.fileUrl1 && (
        <div>
          <h2>Retrieved File 1:</h2>
          {fileTypes.fileType1.startsWith("image") ? (
            <img
              src={fileUrls.fileUrl1}
              alt="Retrieved File 1"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            // <iframe
            //   title="Retrieved File 1"
            //   src={fileUrls.fileUrl1}
            //   style={{ width: "100%", height: "500px" }}
            // />
            <embed
              src={fileUrls.fileUrl4}
              type=""
              style={{ width: "100%", height: "500px" }}
            />
          )}
        </div>
      )}
      {fileUrls.fileUrl2 && (
        <div>
          <h2>Retrieved File 2:</h2>
          {fileTypes.fileType2.startsWith("image") ? (
            <img
              src={fileUrls.fileUrl2}
              alt="Retrieved File 2"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            <iframe
              title="Retrieved File 2"
              src={fileUrls.fileUrl2}
              style={{ width: "100%", height: "500px" }}
            />
          )}
        </div>
      )}
      {fileUrls.fileUrl3 && (
        <div>
          <h2>Retrieved File 3:</h2>
          {fileTypes.fileType3.startsWith("image") ? (
            <img
              src={fileUrls.fileUrl3}
              alt="Retrieved File 3"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            <iframe
              title="Retrieved File 3"
              src={fileUrls.fileUrl3}
              style={{ width: "100%", height: "500px" }}
            />
          )}
        </div>
      )}
      {fileUrls.fileUrl4 && (
        <div>
          <h2>Retrieved File 4:</h2>
          {fileTypes.fileType4.startsWith("image") ? (
            <img
              src={fileUrls.fileUrl4}
              alt="Retrieved File 4"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            <iframe
              title="Retrieved File 4"
              src={fileUrls.fileUrl4}
              style={{ width: "100%", height: "500px" }}
            />
          )}
        </div>
      )}
    </div>
  );
}
