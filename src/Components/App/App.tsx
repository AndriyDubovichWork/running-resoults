import React, { useEffect } from 'react';
import Picker from '../Picker/Picker';
import style from './App.module.css';
import moment from 'moment';
import { TextField } from '@mui/material';
import { getData, AddRunningData } from './../../Data/data';
import ChooseUser from '../ChooseUser/ChooseUser';

function App() {
  const [date, setDate] = React.useState<Date>(new Date(moment().format()));

  const [laps, setLaps] = React.useState<string>('');

  const [km, setKm] = React.useState<string>('');

  const [user, setUser] = React.useState<string>('Andriy');

  useEffect(() => {
    let data: any = {};
    if (typeof date !== 'string') {
      data = getData(date.toISOString().split('T')[0], user);
    } else {
      data = getData(date, user);
    }
    if (data) {
      // console.log(data);
      setLaps(data.laps);
      setKm(data.km);
    }
  }, [date]);
  const LapsHandler = (e: any) => {
    if (e.target.value.length < 5) {
      setLaps(e.target.value);
      setKm(String(Math.round(parseInt(e.target.value) * 0.168 * 100) / 100));
    }
  };
  const KMHandler = (e: any) => {
    if (e.target.value.length < 4) {
      setKm(e.target.value);
      setLaps(
        String(
          Math.round(Math.round(parseInt(e.target.value) * 5.952) * 100) / 100
        )
      );
    }
  };
  const AddToDB = () => {
    AddRunningData({
      laps: parseInt(laps),
      km: parseInt(km),
      date: typeof date !== 'string' ? date.toISOString().split('T')[0] : date,
      user: user,
    });
  };
  return (
    <div className={style.App}>
      <ChooseUser user={user} setUser={setUser} />
      <Picker value={date} setValue={setDate} />
      <TextField
        sx={{ width: '200px' }}
        variant='outlined'
        label='laps'
        value={laps}
        type={'number'}
        onChange={LapsHandler}
      />
      <TextField
        sx={{ width: '200px' }}
        variant='outlined'
        label='km'
        value={km}
        type={'number'}
        onChange={KMHandler}
      />
      <button onClick={AddToDB} disabled={!laps || !km || !date}>
        save
      </button>
    </div>
  );
}

export default App;
