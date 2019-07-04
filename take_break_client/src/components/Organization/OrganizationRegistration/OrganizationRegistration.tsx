import './styles.scss';

import { Card } from 'antd';
import OrganizationRegistrationForm from '../OrganizationRegistrationForm';

const OrganizationRegistration: React.FC = () => {
  return (
    <div className="OrganizationRegistration">
      <Card
        title="조직 생성"
        bordered={false}
        className="OrganizationRegistration__card"
      >
        <OrganizationRegistrationForm />
      </Card>
    </div>
  );
};

export default OrganizationRegistration;
