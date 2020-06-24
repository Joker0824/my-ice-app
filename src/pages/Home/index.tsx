import React from 'react';
import Guide from '@/components/Guide';
import { Alert } from 'antd';

const Home = () => {
  return (
    <div>
      <Guide />
      <Alert message="我是alert" />
    </div>
  );
};

export default Home;
