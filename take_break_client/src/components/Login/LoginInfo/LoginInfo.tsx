import { Typography } from 'antd';
import './styles.scss';

const { Title, Text } = Typography;

const Intro: React.FC = () => {
  return (
    <div className={'Intro'}>
      <Title>쉴래!</Title>
      <Title mark level={2}>
        Hello Stranger,
        <br />
        We are "Take Break"!
      </Title>
      <Text>편리하고 쉽게 휴가를 관리해보세요!</Text>
      <br />
      <Text>"쉴래"가 도와드립니다.</Text>
    </div>
  );
};

export default Intro;
