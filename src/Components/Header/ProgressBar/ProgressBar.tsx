import React from 'react';
import style from './../Header.module.scss';
import BorderLinearProgress from './../../../StyledComponents/ProgressBar';

type ProgressBarType = {
  RunkPrecentage: number;
  IsSideBarOpen: boolean;
  lapsSum: number;
};

const ProgressBar = (props: ProgressBarType) => {
  return (
    <div className={style.progress}>
      <BorderLinearProgress
        variant='determinate'
        value={props.RunkPrecentage}
      />
    </div>
  );
};

export default ProgressBar;
