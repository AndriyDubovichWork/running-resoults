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

import AddRunningDataComponent from '../AddRunningData/AddRunningData';
import { Select, MenuItem } from '@mui/material';
import Chart from '../Chart/Chart';

import ReturnRung from '../../helper/returnRung';
//@ts-ignore
import Header from '../Header/Header';
import WhoIsBoss from '../../helper/WhoIsBoss';

function App() {
  //State

  const [date, setDate] = useState<Date>(new Date(moment().format()));

  const [laps, setLaps] = useState('');

  const [pullUps, setPullUps] = useState('');

  const [km, setKm] = useState('');

  const [user, setUser] = useState('Andriy');

  const UserArray = ['Andriy', 'Ivan'];

  const [userBoss, setUserBoss] = useState(WhoIsBoss(UserArray));

  const [lapsSum, setLapsSum] = useState(GetLapsSum(user));

  const [Runk, setRunk] = useState(ReturnRung(lapsSum).Rung);
  const [RunkPrecentage, setRunkPrecentage] = useState(
    ReturnRung(lapsSum).precent
  );
  const [UserData, setUserData] = useState({
    labels: [1, 2],
    datasets: [
      {
        label: 'hi',
        data: [5, 50],
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });
  const [IsSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    const data = getMultipleData(user);
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
            borderWidth: 2,
          },
          {
            label: 'laps',
            data: data.map((run: any) => run.laps),
            backgroundColor: ['yellow'],
            borderColor: 'yellow',
            borderWidth: 2,
          },
          {
            label: "Pull Up's",
            data: data.map((run: any) => run.pullUps),
            backgroundColor: ['blue'],
            borderColor: 'blue',
            borderWidth: 2,
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
  //Add data from forms to Local storage
  const AddToDB = () => {
    AddRunningData({
      pullUps: parseInt(pullUps),
      laps: parseInt(laps),
      km: parseInt(km),
      date: typeof date !== 'string' ? date.toISOString().split('T')[0] : date,
      user: user,
    });
    setIsSideBarOpen(!IsSideBarOpen);
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
        </Header>
      </div>

      <div className={style.Chart}>
        <Chart UserData={UserData} />
      </div>
    </div>
  );
}

export default App;
