import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import moment from 'moment';
//@ts-ignore
import * as deepcopy from 'deepcopy';
import {
  getData,
  AddRunningData,
  getMultipleData,
  GetLapsSum,
} from './../../Data/data';

import AddRunningDataComponent from '../Sidebar/AddRunningData/AddRunningData';
import { Select, MenuItem } from '@mui/material';
import Chart from '../Main/Chart/Chart';

import { selector, useRecoilState, atom } from 'recoil';

import ReturnRung from '../../helper/returnRung';
//@ts-ignore
import Header from '../Header/Header';
import WhoIsBoss from '../../helper/WhoIsBoss';
import Main from './../Main/Main';
import Sidebar from './../Sidebar/Sidebar';

//Recoil state Atoms
import {
  DateA,
  LapsA,
  KmA,
  PullUpsA,
  UserA,
  UserBossA,
  LapsSumA,
  RunkA,
  RunkPrecentA,
  IsSideBarOpenA,
  UserDataA,
} from '../../Recoil/SidebarRecoilAtoms';
import SortByDate from '../../helper/SortByDate';

function App() {
  //State
  const UserArray = ['Andriy', 'Ivan'];
  //Band of Four
  const [date, setDate] = useRecoilState(DateA);
  const [laps, setLaps] = useRecoilState(LapsA);
  const [km, setKm] = useRecoilState(KmA);
  const [pullUps, setPullUps] = useRecoilState(PullUpsA);

  const [user, setUser] = useRecoilState(UserA);

  const [userBoss, setUserBoss] = useRecoilState(UserBossA);

  const [lapsSum, setLapsSum] = useRecoilState(LapsSumA);

  const [Runk, setRunk] = useRecoilState(RunkA);
  const [RunkPrecentage, setRunkPrecentage] = useRecoilState(RunkPrecentA);

  const [IsSideBarOpen, setIsSideBarOpen] = useRecoilState(IsSideBarOpenA);

  const [UserData, setUserData] = useRecoilState(UserDataA);

  useEffect(() => {
    const data = SortByDate(getMultipleData(user));

    //if Find data in DataBase
    if (data) {
      setUserData({
        labels: data.map((run: any) => run.date),

        datasets: [
          {
            label: 'km',
            data: data.map((run: any) => run.km),
            backgroundColor: ['red'],
            borderColor: 'red',
            borderWidth: 4,
          },
          {
            label: 'laps',
            data: data.map((run: any) => run.laps),
            backgroundColor: ['yellow'],
            borderColor: 'yellow',
            borderWidth: 4,
          },
          {
            label: "Pull Up's",
            data: data.map((run: any) => run.pullUps),
            backgroundColor: ['blue'],
            borderColor: 'blue',
            borderWidth: 4,
          },
        ],
      });
    }
    setLapsSum(GetLapsSum(user));

    setRunk(ReturnRung(lapsSum).Rung);

    setRunkPrecentage(ReturnRung(lapsSum).precent);
  }, [date, user, km, laps, pullUps, IsSideBarOpen]);

  useEffect(() => {
    let data: any = {};
    if (typeof date !== 'string') {
      data = getData(date.toISOString().split('T')[0], user);
    } else {
      data = getData(date, user);
    }
    if (data) {
      // console.log(data);
      setPullUps(data.pullUps);
      setLaps(data.laps);
      setKm(data.km);
    }
    setUserBoss(WhoIsBoss(UserArray));
  }, [date, user]);

  //Handlers
  const PullUpsHandler = (e: any) => {
    if (e.target.value.length <= 3) {
      setPullUps(e.target.value);
    }
  };
  const LapsHandler = (e: any) => {
    if (e.target.value.length <= 3) {
      setLaps(e.target.value);
      setKm(String(Math.round(parseInt(e.target.value) * 0.168 * 100) / 100));
    }
  };

  const KMHandler = (e: any) => {
    if (e.target.value.length <= 2) {
      setKm(e.target.value);
      setLaps(
        String(
          Math.round(Math.round(parseInt(e.target.value) * 5.952) * 100) / 100
        )
      );
    }
  };
  //Add data from form to Local storage
  const AddToDB = () => {
    AddRunningData({
      pullUps: parseInt(pullUps),
      laps: parseInt(laps),
      km: parseInt(km),
      date: typeof date !== 'string' ? date.toISOString().split('T')[0] : date,
      user: user,
    });
    // setIsSideBarOpen(!IsSideBarOpen);
  };
  //JSX
  return (
    <div className={style.App}>
      <div className={style.Header}>
        <Header
          IsSideBarOpen={IsSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          lapsSum={lapsSum}
          Runk={Runk}
          RunkPrecentage={RunkPrecentage}
        ></Header>
      </div>

      <div className={style.Chart}>
        <Main UserData={UserData} />
      </div>

      <div className={style.SideBar}>
        <Sidebar
          IsSideBarOpen={IsSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        >
          <AddRunningDataComponent
            userBoss={userBoss}
            user={user}
            setUser={setUser}
            UserArray={UserArray}
            date={date}
            setDate={setDate}
            laps={laps}
            pullUps={pullUps}
            PullUpsHandler={PullUpsHandler}
            LapsHandler={LapsHandler}
            km={km}
            KMHandler={KMHandler}
            AddToDB={AddToDB}
          />
        </Sidebar>
      </div>
    </div>
  );
}

export default App;
