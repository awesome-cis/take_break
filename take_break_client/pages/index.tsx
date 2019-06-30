import { NextFunctionComponent } from 'next';
import Link from 'next/link';
import { Button } from 'antd';

const Index: NextFunctionComponent = () => {
  return (
    <div>
      <Link href="/login">
        <Button size="large">Login</Button>
      </Link>
      <Link href="/register">
        <Button size="large">Register</Button>
      </Link>
    </div>
  );
};

export default Index;
