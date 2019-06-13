const { User } = require("../db");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  User.findAll().then(users => res.send(users));
});

module.exports = router;
