const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/acmeProductManagers", {
  logging: false
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

User.belongsTo(User, { as: "Manager" });

module.exports = { db, User };
