import * as React from 'react';
import Router from 'next/router';
import { Form, Input, Tooltip, Icon, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { UserServiceAgent } from '../../../agent';
import { IRegisterFormValue } from '../../../agent/UserServiceAgent';

class RegistrationForm extends React.Component<FormComponentProps> {
  handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(
      (err, values: IRegisterFormValue) => {
        if (!err) {
          UserServiceAgent.register(values).then(() => {
            Router.push('/login');
          });
        }
      }
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      colon: false,
      style: { marginBottom: '1rem' }
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Email" {...formItemLayout}>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid Email!'
              },
              {
                required: true,
                message: 'Please input your Email!'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Username" {...formItemLayout}>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              User ID&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
          extra="Once created, it can not be changed."
          {...formItemLayout}
        >
          {getFieldDecorator('slug', {
            rules: [
              {
                required: true,
                pattern: /^[A-Za-z0-9_]{4,20}$/gm,
                message: 'min4, max20, number, englinsh, _, whitespace'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item hasFeedback label="Password" {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!'
              }
            ]
          })(<Input.Password />)}
        </Form.Item>

        <Form.Item hasFeedback label="Bio" {...formItemLayout}>
          {getFieldDecorator('bio', {})(<Input.TextArea rows={4} />)}
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'register' })(RegistrationForm);
