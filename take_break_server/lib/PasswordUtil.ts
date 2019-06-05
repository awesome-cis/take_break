import * as bcrypt from 'bcrypt';

// 12회 이상이면 안전
const SALT_ROUNDS = 12;

/**
 * @description 정제되지 않은 password를 받아 처리하는 클래스
 */
class PasswordUtil {
  password: string;

  constructor(password: string) {
    this.password = password;
  }

  encrypt = (): string => {
    return bcrypt.hashSync(this.password, SALT_ROUNDS);
  };
}

export default PasswordUtil;
