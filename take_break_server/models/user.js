const db = require('../database/db');
const bcrypt = require('bcrypt');

const Model = db.Sequelize.Model;

class User extends Model {
  validatePassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

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
    },
    provider: {
      type: db.Sequelize.STRING
    },
    oAuthId: {
      type: db.Sequelize.STRING
    }
  },
  {
    sequelize: db.sequelize
  }
);

module.exports = User;
