import React from 'react';
import ChooseUser from '../ChooseUser/ChooseUser';
import { Button, Divider, List, ListItem, TextField } from '@mui/material';
import Picker from '../Picker/Picker';
import style from './AddRunningData.module.css';

function AddRunningData({
  user,
  setUser,
  date,
  setDate,
  laps,
  LapsHandler,
  pullUps,
  PullUpsHandler,
  km,
  KMHandler,
  AddToDB,
}: any) {
  return (
    <List>
      <ListItem>
        <ChooseUser user={user} setUser={setUser} />
      </ListItem>
      <Divider variant='middle' />

      <ListItem>
        <Picker value={date} setValue={setDate} />
      </ListItem>
      <ListItem>
        <TextField
          sx={{ width: '200px', margin: '0 auto' }}
          variant='outlined'
          label='laps'
          value={laps}
          type={'number'}
          onChange={LapsHandler}
        />
      </ListItem>
      <ListItem>
        <TextField
          sx={{ width: '200px', margin: '0 auto' }}
          variant='outlined'
          label='km'
          value={km}
          type={'number'}
          onChange={KMHandler}
        />
      </ListItem>
      <ListItem>
        <TextField
          sx={{ width: '200px', margin: '0 auto' }}
          variant='outlined'
          label='pull ups'
          value={pullUps}
          type={'number'}
          onChange={PullUpsHandler}
        />
      </ListItem>
      <ListItem>
        <Button
          variant='contained'
          onClick={AddToDB}
          disabled={!laps || !km || !date || !pullUps}
          sx={{ margin: '20px auto' }}
        >
          save
        </Button>
      </ListItem>
    </List>
  );
}

export default AddRunningData;
