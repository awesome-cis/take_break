import { Card } from 'antd';
import Link from 'next/link';
import RegisterForm from './RegisterForm';
import './styles.scss';

const Register = () => {
  return (
    <div className={'Register__container'}>
      <Card
        title="Create Account"
        bordered={false}
        className={'Register__card'}
        extra={
          <Link href="/login">
            <a>Sign In</a>
          </Link>
        }
      >
        <RegisterForm />
      </Card>
    </div>
  );
};

export default Register;
