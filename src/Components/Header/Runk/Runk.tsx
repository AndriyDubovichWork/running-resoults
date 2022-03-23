import React from 'react';
import Mainstyle from './../Header.module.scss';

import ProgressBar from '../ProgressBar/ProgressBar';

type RunkType = {
  lapsSum: number;
  RunkPrecentage: number;
  IsSideBarOpen: boolean;
  Runk: string;
};

const Runk = (props: RunkType) => {
  return (
    <div className={Mainstyle.ProgressBar}>
      <div className={Mainstyle.LapsSum}>{props.lapsSum}</div>

      <ProgressBar
        RunkPrecentage={props.RunkPrecentage}
        IsSideBarOpen={props.IsSideBarOpen}
        lapsSum={props.lapsSum}
      />
      <div className={Mainstyle.Rang}>{props.Runk}</div>
    </div>
  );
};

export default Runk;
