import { Row, Col } from 'antd';
import LoginInfo from './LoginInfo';
import LoginForm from './LoginForm';
import './styles.scss';

const Login: React.FC = () => {
  return (
    <Row type="flex" align="middle" className={'Login__row'}>
      <Col span={9} offset={3} className={'Login__intro'}>
        <LoginInfo />
      </Col>
      <Col span={6} offset={1}>
        <LoginForm />
      </Col>
    </Row>
  );
};

export default Login;
