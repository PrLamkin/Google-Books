const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Book.find({})
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Book.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    console.log(`delete requested id ${req.params.id}`)
    db.Book.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
};