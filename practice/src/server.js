// const express = require('express');

const express = require("express");
// const { post } = require("request");
const app = express();
require("./db/conne");
const student = require("./models/user");
// require('dotenv').config()
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// app.use()

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});
app.post("/post", (req, res) => {
  //   res.send({"name":"Arvind"})

  const Student = new student({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  Student.save()
    .then((result) => {
        res.send(Student)
      console.log("added broh");
    })
    .catch((e) => {
      console.log(e);
    });
  // const userrr = new

  //     usermodel({
  //         username: req.body.name,
  //         email : req.body.email,
  //         password:
  //         req.body.password,

  //     })
  //     userrr.save();
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
