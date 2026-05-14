require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");

const app = express();


// ================= MIDDLEWARE =================

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ================= STATIC FOLDER =================

app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);


// ================= ROUTES =================

app.use(
    "/api/complaints",
    require("./routes/complaints")
);

app.use(
    "/api/auth",
    require("./routes/auth")
);


// ================= MONGODB CONNECTION =================

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {

        console.log(
            `Server running on port ${process.env.PORT}`
        );

    });

})

.catch(err => {

    console.log(err);

});