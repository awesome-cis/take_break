const db = require('../database/db');

const Model = db.Sequelize.Model;

class User extends Model {}

User.init(
  {
    name: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: db.Sequelize.STRING
    },
    password: {
      type: db.Sequelize.STRING
    }
  },
  {
    sequelize: db.sequelize
  }
);

module.exports = User;
