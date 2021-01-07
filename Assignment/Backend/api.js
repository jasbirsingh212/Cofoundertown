const express = require("express");
const cors=require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const fs = require("fs");
const path = require("path");
const userRouter = require("./routes/user.js");
const exerciseRouter = require("./routes/exercise.js");

//console.log(exerciseRouter);

app.use(cors());
app.use(express.json());
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{ userNewUrlParser:true ,useCreateIndex:true,useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongodb started");
})

app.use("/user", userRouter);
app.use("/exercise", exerciseRouter);
//app.use("/api/v1/comment",commentRouter);
app.listen(4000, function () {
    console.log("Server is listening at port 4000");
});