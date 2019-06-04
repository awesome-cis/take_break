import * as bcrypt from 'bcrypt';

/**
 * @description 정제되지 않은 password를 받아 처리하는 클래스
 */
class PasswordUtil {
  password: string;

  constructor(password: string) {
    this.password = password;
    this.encrypt = this.encrypt.bind(this);
  }

  encrypt(): string {
    return bcrypt.hashSync(this.password, 12);
  }
}

export default PasswordUtil;
