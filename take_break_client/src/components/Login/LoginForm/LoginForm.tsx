import Router from 'next/router';
import Link from 'next/link';
import { Form, Icon, Input, Button, Typography } from 'antd';
import { WrappedFormInternalProps } from 'antd/lib/form/Form';
import { UserServiceAgent } from 'agent';
import { LoginValuesType } from 'agent/UserServiceAgent.types';
import './styles.scss';

const { Title } = Typography;

const LoginForm: React.FC<WrappedFormInternalProps> = props => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFields((err, values: LoginValuesType) => {
      if (!err) {
        UserServiceAgent.login(values)
          .then(res => res.json())
          .then(d => {
            localStorage.setItem('accessToken', d.accessToken);
            Router.push('/');
          });
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title level={4} className={'LoginForm__title'}>
          Sign in to "Take Break"
        </Title>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your Email!' }]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="email"
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="LoginForm__submitButton"
          >
            Log in
          </Button>
          <a className="LoginForm__forgotLink" href="">
            Forgot password
          </a>
        </Form.Item>
      </Form>
      <div className={'Loginform__socialButton'}>
        <div>Github Login</div>
        <div>Google Login</div>
        <div>Naver Login</div>
      </div>
      <div className={'LoginForm__register'}>
        New to Take Break?{' '}
        <Link href="/register">
          <a>register now!</a>
        </Link>
      </div>
    </>
  );
};

export default Form.create({ name: 'login' })(LoginForm);
