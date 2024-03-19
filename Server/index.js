const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModal = require("./models/Users");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("/", (req, res) => {
  UserModal.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.post("/createUser", (req, res) => {
  console.log(req.body);
  UserModal.create(req.body)
    .then((users) => res.status(200).send("Updated Successfully"))
    .catch((err) => res.status(400).send("use unique id for the user"));
});

app.get("/getusers/:id", (req, res) => {
  const id = req.params.id;
  UserModal.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  UserModal.findByIdAndDelete({ _id: req.params.id })
    .then((res) => res.json(res.data))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModal.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(1080, () => {
  console.log("listening on 1080");
});
