const express = require('express')
const mongoose = require('mongoose');
const ProductsRoter = require('./routes/Immigrators');
const app = express()

require('dotenv').config();

app.use(express.json());
app.use("/home",ProductsRoter)
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;


mongoose.connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
    console.log('Connected!')});


