const { ObjectId } = require("mongodb");
const db = require("../db/database");

const getContacts = (req, res) => {
  db.getDB()
    .db()
    .collection("contacts")
    .find()
    .toArray()
    .then((data) => {
      res.status(200).send(data);
    });
};

const getContactById = (req, res) => {
  const id = new ObjectId(req.params.id);

  db.getDB()
    .db()
    .collection("contacts")
    .find({ _id: id })
    .toArray()
    .then((data) => {
      res.status(200).send(data[0]);
    });
};

const createContact = (req, res) => {
  console.log(req);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  db.getDB()
    .db()
    .collection("contacts")
    .insertOne(contact)
    .then((result) => {
      res.status(201).send(result);
    });
};

const updateContact = (req, res) => {
  const id = new ObjectId(req.params.id);

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  db.getDB()
    .db()
    .collection("contacts")
    .replaceOne({ _id: id }, contact)
    .then((result) => {
      res.status(200).send(result);
    });
};

const deleteContact = (req, res) => {
  const id = new ObjectId(req.params.id);

  db.getDB()
    .db()
    .collection("contacts")
    .remove({ _id: id })
    .then((result) => {
      res.status(200).send(result);
    });
};

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
