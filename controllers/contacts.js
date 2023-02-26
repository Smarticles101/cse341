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

module.exports = {
  getContacts,
  getContactById,
};
