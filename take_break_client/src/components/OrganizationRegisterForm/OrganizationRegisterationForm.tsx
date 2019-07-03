import './OrganizationRegisterationForm.scss';

import { Button, Form, Icon, Input, Radio, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';

const { Option } = Select;

// TODO: 상수 파일 분리
// NOTE: server와 함께 사용할 수 있어, 통합 가능성 고려
enum OrganizationType {
  Individual = 100,
  Company = 200
}

interface IProps {}

type Props = IProps & FormComponentProps;

class OrganizationRegisterationForm extends React.Component<Props> {
  handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const { validateFields } = this.props.form;

    e.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  renderNameTextInput = () => {
    const { getFieldDecorator } = this.props.form;

    return getFieldDecorator('username', {
      rules: [{ required: true, message: '조직명을 입력해주세요.' }]
    })(
      <Input
        prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="조직명"
      />
    );
  };

  renderDescriptionTextInput = () => {
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

  renderLinkTextInput = () => {
    const { getFieldDecorator } = this.props.form;

    const addonBefore = (
      <Select defaultValue="http://" style={{ width: 90 }}>
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
      </Select>
    );

    return getFieldDecorator('link', {
      rules: [
        {
          pattern: /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
          message: '올바른 URL을 입력해주세요.'
        }
      ]
    })(<Input addonBefore={addonBefore} placeholder="takebreak.co" />);
  };

  renderTypeRadioInput = () => {
    const { getFieldDecorator } = this.props.form;

    return getFieldDecorator('radio-button', {
      rules: [
        {
          required: true,
          message: '개인 또는 조직을 선택해주세요.'
        }
      ]
    })(
      <Radio.Group>
        <Radio value={OrganizationType.Individual}>개인</Radio>
        <Radio value={OrganizationType.Company}>기업/단체</Radio>
      </Radio.Group>
    );
  };

  renderSubmitButton = () => {
    return (
      <Button type="primary" htmlType="submit" className="login-form-button">
        등록하기
      </Button>
    );
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>{this.renderNameTextInput()}</Form.Item>
        <Form.Item>{this.renderDescriptionTextInput()}</Form.Item>
        <Form.Item>{this.renderLinkTextInput()}</Form.Item>
        <Form.Item>{this.renderTypeRadioInput()}</Form.Item>
        <Form.Item>{this.renderSubmitButton()}</Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'OrganizationRegistrationForm' })(
  OrganizationRegisterationForm
);
