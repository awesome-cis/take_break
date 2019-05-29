import { Form, Icon, Input, Button, Typography } from 'antd';
const { Title } = Typography;

import './styles.scss';
import { WrappedFormInternalProps } from 'antd/lib/form/Form';

const LoginForm: React.FC<WrappedFormInternalProps> = props => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
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
        New to Take Break? <a href="">register now!</a>
      </div>
    </>
  );
};

export default Form.create({ name: 'login' })(LoginForm);
