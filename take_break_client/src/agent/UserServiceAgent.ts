import agent from './agent';
import { RegisterValuesType, LoginValuesType } from './UserServiceAgent.types';

const register = (values: RegisterValuesType): Promise<Object> =>
  agent.post('/auth/register', { ...values });

const login = (values: LoginValuesType): Promise<Object> =>
  agent.post('/auth/login', { ...values });

export default { register, login };
