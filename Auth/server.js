require("dotenv").config();

const express = require('express')
const app = express();
const connectToDB = require('./database/db')
const PORT = process.env.PORT || 3000

connectToDB();

app.listen(PORT, ()=>{
  console.log("server started!!!")
})