const express = require('express')
const app = express()
const path = require('path')
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((err) => {
    console.log("oh no mongo connection error");
    console.log(err);
  });


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/dog', (req, res) => {
  res.send('Woof')
})

app.listen(3000, () => {
  console.log('Roger roger.')
})