const bcrypt = require('bcrypt');

class PasswordUtil {
  constructor(password) {
    this.password = password;
    this.encrypt = this.encrypt.bind(this);
  }

  encrypt() {
    return bcrypt.hashSync(this.password, 12);
  }
}

module.exports = PasswordUtil;
