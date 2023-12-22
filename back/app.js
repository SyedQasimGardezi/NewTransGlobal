const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv").config();
const fs = require("fs");
const cloudinary = require("./cloudinary");

const app = express();
app.use(cors());
const PORT = 8000;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongo_url);
  console.log("db connected");
}

const customer = mongoose.model("CustomerModel", {
  name: String,
  phone: String,
  message: String,
});
app.post("/customerPost", async (req, res) => {
  try {
    const doc = new customer({
      name: req.body.name,
      phone: req.body.phone,
      message: req.body.message,
    });
    const savedDocument = await doc.save();

    res.status(200).json({
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/getCustomer", (req, res) => {
  const findCustomer = customer.find();
  res.json(findCustomer);
});

const YourModel = mongoose.model("Driver", {
  firstname: String,
  lastname: String,
  title: String,
  company: String,
  email: String,
  phone: String,
  mcno: String,
  city: String,
  state: String,
  zip: String,
  w9form: String,
  coi: String,
  mc: String,
  noa: String,
});

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    console.log(document);
    cb(null, Date.now() + file.originalname + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post(
  "/submitForm",
  upload.fields([
    { name: "fileInput1", maxCount: 1 },
    { name: "fileInput2", maxCount: 1 },
    { name: "fileInput3", maxCount: 1 },
    { name: "fileInput4", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const newDocument = new YourModel({
        firstname: req.body.textInput1,
        lastname: req.body.textInput2,
        title: req.body.textInput3,
        company: req.body.textInput4,
        email: req.body.textInput5,
        phone: req.body.textInput6,
        mcno: req.body.textInput7,
        city: req.body.textInput8,
        state: req.body.textInput9,
        zip: req.body.textInput10,
        w9form: req.files["fileInput1"] ? req.files["fileInput1"][0].path : "",
        coi: req.files["fileInput2"] ? req.files["fileInput2"][0].path : "",
        mc: req.files["fileInput3"] ? req.files["fileInput3"][0].path : "",
        noa: req.files["fileInput4"] ? req.files["fileInput4"][0].path : "",
      });

      const savedDocument = await newDocument.save();

      res.status(200).json({
        message: "Form submitted successfully",
        fileId: savedDocument._id,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

app.get("/getFile/:id/:fileIndex", async (req, res) => {
  try {
    const document = await YourModel.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ error: "File not found" });
    }
    const fileIndex = parseInt(req.params.fileIndex, 10);
    let filePath = "";

    if (fileIndex == 1) {
      filePath = document.w9form;
    } else if (fileIndex == 2) {
      filePath = document.coi;
    } else if (fileIndex == 3) {
      filePath = document.mc;
    } else if (fileIndex == 4) {
      filePath = document.noa;
    } else {
      return res.status(400).json({ error: "Invalid file index" });
    }

    const fileStream = fs.createReadStream(filePath);

    const fileExtension = path.extname(filePath).toLowerCase();
    let contentType = "application/octet-stream";

    if (fileExtension === ".pdf") {
      contentType = "application/pdf";
    } else if (fileExtension === ".doc" || fileExtension === ".docx") {
      contentType = "application/msword";
    } else if (fileExtension.match(/\.(jpg|jpeg|png|gif)$/)) {
      contentType = "image/jpeg";
    }

    res.setHeader("Content-Type", contentType);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error retrieving file:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
