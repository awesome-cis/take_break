import { Organization } from '../models';
import * as faker from 'faker';

export default (factory: factory.Static) => {
  factory.define('organization', Organization, {
    name: faker.internet.userName(),
    description: faker.lorem.paragraphs(3),
    link: faker.lorem.slug(10),
    type: Organization.TYPE.INDIVIDUAL,
    isSearchable: true,
    isJoinable: true
  });
};
