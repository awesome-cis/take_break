import './styles.scss';

import { Button, Form, Icon, Input, Radio } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';

// TODO: 상수 파일 분리, 엄격한 타이핑 적용
// NOTE: server와 함께 사용할 수 있어, 통합 가능성 고려
enum OrganizationType {
  Individual = 100,
  Company = 200
}

interface IProps {}

type Props = IProps & FormComponentProps;

class OrganizationregistrationForm extends React.Component<Props> {
  handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const { validateFields } = this.props.form;

    e.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  renderNameField = () => {
    const { getFieldDecorator } = this.props.form;

    return getFieldDecorator('name', {
      rules: [{ required: true, message: '조직명을 입력해주세요.' }]
    })(
      <Input
        prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="조직명"
      />
    );
  };

  renderDescriptionField = () => {
    const { getFieldDecorator } = this.props.form;

    return getFieldDecorator('description', {
      rules: [{ required: true, message: '이 조직에대한 설명을 입력주세요.' }]
    })(
      <Input
        prefix={<Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="설명"
      />
    );
  };

  renderLinkField = () => {
    const { getFieldDecorator } = this.props.form;

    return getFieldDecorator('link', {
      rules: [
        {
          message: '올바른 URL을 입력해주세요.',
          pattern: /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        }
      ]
    })(<Input placeholder="https://takebreak.info" />);
  };

  renderTypeField = () => {
    const { getFieldDecorator } = this.props.form;

    return getFieldDecorator('type', {})(
      <Radio.Group>
        <Radio value={OrganizationType.Individual}>개인</Radio>
        <Radio value={OrganizationType.Company}>기업/단체</Radio>
      </Radio.Group>
    );
  };

  renderSubmitBtn = () => {
    return (
      <Button type="primary" htmlType="submit" className="login-form-button">
        등록하기
      </Button>
    );
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>{this.renderNameField()}</Form.Item>
        <Form.Item>{this.renderDescriptionField()}</Form.Item>
        <Form.Item>{this.renderLinkField()}</Form.Item>
        <Form.Item>{this.renderTypeField()}</Form.Item>
        <Form.Item>{this.renderSubmitBtn()}</Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'OrganizationRegistrationForm' })(
  OrganizationregistrationForm
);
