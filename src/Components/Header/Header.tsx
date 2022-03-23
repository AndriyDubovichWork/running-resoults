import { LinearProgress, SpeedDialIcon } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import style from './Header.module.scss';
import BorderLinearProgress from './../../StyledComponents/ProgressBar';
import ReturnRung from '../../helper/returnRung';

import Runk from './Runk/Runk';

export type HeaderType = {
  setIsSideBarOpen: Function;
  IsSideBarOpen: boolean;
  RunkPrecentage: number;
  Runk: string;
  lapsSum: number;
};

const Header = (props: HeaderType) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.addButtonDiv}>
          <button
            onClick={() => {
              props.setIsSideBarOpen(!props.IsSideBarOpen);
            }}
            className={style.addButton}
          >
            add to DB
          </button>
        </div>
        <Runk
          lapsSum={props.lapsSum}
          RunkPrecentage={props.RunkPrecentage}
          IsSideBarOpen={props.IsSideBarOpen}
          Runk={props.Runk}
        />
      </div>
    </>
  );
};

export default Header;
