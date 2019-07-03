import agent from './agent';

export interface IRegisterFormValue {
  username: string;
  email: string;
  slug: string;
  password: string;
  bio: string | undefined;
}

const register = (values: IRegisterFormValue): Promise<Object> =>
  agent.post('/auth/register', { ...values });

export default { register };
