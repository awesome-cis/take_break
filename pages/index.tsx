import './styles.scss';

import * as React from 'react';

const Index: React.FC = () => {
  const helloText: string = 'Hello Next.js, Hello Typescript';
  return (
    <div>
      <p className={'root'}>{helloText}</p>
    </div>
  );
};

export default Index;
