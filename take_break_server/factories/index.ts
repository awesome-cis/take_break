import factory from 'factory-girl';
import userFactory from './userFactory';
import organizationFactory from './organizationFactory';

userFactory(factory);
organizationFactory(factory);

export default factory;
