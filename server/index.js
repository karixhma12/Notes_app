const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected!");
    app.listen(process.env.PORT,()=>{
        console.log("Server running...")
    })
})
.catch((err)=>{
    console.log(err);
})