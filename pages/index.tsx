import '../src/styles/ant.less';
import Head from 'next/Head';
import { Button } from 'antd';

const Index: React.FC = () => {
  const helloText: string = 'Hello Next.js, Hello Typescript';
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat|Nanum+Gothic&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.min.js" />
      </Head>
      <div>
        <p className={'root'}>{helloText}</p>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    </>
  );
};

export default Index;
