import React from 'react';
import Chart from './Chart/Chart';

type MainType = {
  UserData: any;
};

const Main = (props: MainType) => {
  return (
    <>
      <Chart UserData={props.UserData} />
    </>
  );
};

export default Main;
