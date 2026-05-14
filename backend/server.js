require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");

const bcrypt = require("bcryptjs");

const User = require("./models/User");

const app = express();

async function createAdmin() {

    try {

        const adminExists = await User.findOne({
            email: "admin@gmail.com"
        });

        if (!adminExists) {

            const hashedPassword =
                await bcrypt.hash("admin123", 10);

            await User.create({

                name: "Admin",

                email: "admin@gmail.com",

                password: hashedPassword,

                role: "admin"
            });

            console.log("Default admin created");
        }

    } catch (err) {

        console.log(err);
    }
}

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

    createAdmin();

    app.listen(process.env.PORT, () => {

        console.log(
            `Server running on port ${process.env.PORT}`
        );

    });

})

.catch(err => {

    console.log(err);

});