import { NextFunctionComponent } from 'next';

import agent from '../agent';

const Index: NextFunctionComponent = props => {
  // TODO 확인 후 console.log 제거
  console.log('props', props);
  return <div>Index</div>;
};

Index.getInitialProps = async function() {
  const res = await agent.post('/auth/register', {
    name: 'ryu',
    email: 'oyeahhh@naver.com',
    password: 'oyeahhh'
  });

  const data = await res.json();

  // TODO 확인 후 console.log 제거
  console.log('data', data);

  return {
    resData: data
  };
};

export default Index;
