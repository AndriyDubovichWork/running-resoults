import { LinearProgress, SpeedDialIcon } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import style from './Header.module.scss';
import BorderLinearProgress from './../../StyledComponents/ProgressBar';
import ReturnRung from '../../helper/returnRung';

export type HeaderType = {
  setIsSideBarOpen: Function;
  IsSideBarOpen: boolean;
  RunkPrecentage: number;
  Runk: string;
  lapsSum: number;
  children: any;
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

        <div className={style.ProgressBar}>
          <div className={style.LapsSum}>{props.lapsSum}</div>

          <div className={style.progress}>
            <BorderLinearProgress
              variant='determinate'
              value={props.RunkPrecentage}
            />
          </div>
          <div className={style.Rang}>{props.Runk}</div>
        </div>
      </div>

      <Sidebar {...props}>{props.children}</Sidebar>
    </>
  );
};

export default Header;