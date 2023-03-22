//connect the database using mongoose package?

const mongoose = require("mongoose");
// const db = require("./models");
// const db = require("../models");
mongoose.set("strictQuery",false)
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.8unxxd0.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  
  .catch((err) => {
    console.log(err);})
