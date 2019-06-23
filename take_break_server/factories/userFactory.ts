import { User } from '../models';
import * as faker from 'faker';

export default (factory: factory.Static) => {
  factory.define('user', User, {
    name: faker.internet.userName,
    password: faker.internet.password,
    email: faker.internet.email()
  });
};
