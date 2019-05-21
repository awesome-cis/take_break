import 'styles/index.scss';
import Login from 'components/Login';
import { Typography, Row, Col } from 'antd';

const { Title } = Typography;

const Index: React.FC = () => {
  return (
    <Row
      type="flex"
      align={'middle'}
      justify={'center'}
      className={'container'}
    >
      <Col md={{ span: 10 }} xs={{ span: 16 }}>
        <Title>Take Break</Title>
        <Login />
      </Col>
    </Row>
  );
};

export default Index;
