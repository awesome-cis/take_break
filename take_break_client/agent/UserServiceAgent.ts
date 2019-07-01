import agent from './agent';

const register = (values: { [k: string]: any }): Promise<Object> =>
  agent.post('/auth/register', { ...values });

export default { register };
