require('dotenv').config()

const express = require('express')
const app = express();
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes')

const PORT = process.env.PORT || 3000

// connect to our DB
connectToDB();

// middleware -> express.json()
app.use(express.json())

// routes here
app.use('/api/books', bookRoutes);

app.listen(PORT,()=>{
  console.log(`Server is running at ${PORT}`)
})