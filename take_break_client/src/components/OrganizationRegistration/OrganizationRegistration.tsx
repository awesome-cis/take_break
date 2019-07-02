import './OrganizationRegistration.scss';

import { Card } from 'antd';
import OrganizationRegisterationForm from 'components/OrganizationRegisterForm/OrganizationRegisterationForm';

const OrganizationRegistration: React.FC = () => {
  return (
    <div className={'OrganizationRegistration'}>
      <Card
        title="조직 생성"
        bordered={false}
        className={'OrganizationRegistration__card'}
      >
        <OrganizationRegisterationForm />
      </Card>
    </div>
  );
};

export default OrganizationRegistration;
