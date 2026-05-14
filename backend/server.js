const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/complaintsDB")
.then(() => console.log("MongoDB Connected"));

app.use("/api/complaints", require("./routes/complaints"));
app.use("/api/auth", require("./routes/auth"));

app.listen(5000, () => console.log("Server running on 5000"));

app.use("/uploads", express.static("uploads"));

app.use(express.urlencoded({ extended: true }));