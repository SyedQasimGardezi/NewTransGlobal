const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const app = express();
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongo_url);
  console.log("db connected");
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const customerSchema = new mongoose.Schema({
  fullname: String,
  customerphone: String,
  customermessage: String,
});

const Customer = mongoose.model("Customer", customerSchema);

app.post(
  "/customer",
  async (req, res) => {
    let customer = new Customer();
    customer.fullname = req.body.form.fullname;
    customer.customerphone = req.body.form.customerphone;
    customermessage.title = req.body.form.customermessage;
    const docCustomer = await customer.save();
    console.log(docCustomer);
    res.json(docCustomer);
  },
  (res) => {
    res.json("Submitted");
  }
);
app.get("/customer", async (req, res) => {
  const docsCustomer = await Customer.find({});
  res.json(docsCustomer);
  console.log(docsCustomer);
});

const driverSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  title: String,
  company: String,
  email: String,
  city: String,
  state: String,
  mcnumber: String,
  zip: Number,
  phone: String,
  w9form: Buffer,
  coi: Buffer,
  mc: Buffer,
  noa: Buffer,
});

const Driver = mongoose.model("Driver", driverSchema);

app.post(
  "/driver",
  async (req, res) => {
    let user = new Driver();
    user.firstname = req.body.form.firstname;
    user.lastname = req.body.form.lastname;
    user.title = req.body.form.title;
    user.company = req.body.form.company;
    user.email = req.body.form.email;
    user.city = req.body.form.city;
    user.state = req.body.form.state;
    user.mcnumber = req.body.form.mcnumber;
    user.zip = req.body.form.zip;
    user.phone = req.body.form.phone;
    user.w9form = req.body.form.w9form;
    user.coi = req.body.form.coi;
    user.mc = req.body.form.mc;
    user.noa = req.body.form.noa;
    const doc = await user.save();
    console.log(doc);
    res.json(doc);
  },
  (res) => {
    res.json("Submitted");
  }
);

app.get("/driver", async (req, res) => {
  const docs = await Driver.find({});
  res.json(docs);
  console.log(docs);
});
const port = 8000;

app.listen(port, () => {
  console.log("appstarted");
});
