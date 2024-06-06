const express = require('express');
const dotenv = require('dotenv')
const app = express();
const userRoute = require('./routes/user')
const codeBaseRoute = require('./routes/CodeBase')
const cookieParser = require("cookie-parser");
dotenv.config({path:'./config/config.env'})


//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/v1",userRoute);
app.use("/api/v1",codeBaseRoute);

module.exports = app;