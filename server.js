const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const salesRoute = require("./routes/salesRoute")
const stockRoute = require("./routes/stockRoute")



const app = express()

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    origin: ["https://feeds-fronted.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}))

app.use("/api/sales", salesRoute)
app.use("/api/stocks", stockRoute)
app.get("/", (req, res) =>
{
    res.send("Home Page")
});
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>
    {
        app.listen(PORT, () =>
        {
            console.log(`Server Running on port ${PORT}`);
        })
    })
    .catch((err) => console.log(err));
