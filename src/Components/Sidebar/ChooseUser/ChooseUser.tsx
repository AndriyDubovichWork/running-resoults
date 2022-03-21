import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import BossIcon from './../../../imgs/crown.png';
interface IChooseUser {
  user: string;
  setUser: Function;
  UserArray: string[];
  userBoss: string;
}

const ChooseUser = ({ user, setUser, UserArray, userBoss }: IChooseUser) => {
  return (
    <FormControl sx={{ width: '200px', margin: '0 auto' }}>
      <InputLabel id='demo-simple-select-label'>User</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={user}
        label='User'
        onChange={(e) => {
          setUser(e.target.value);
        }}
      >
        {UserArray.map((user: string) => {
          if (userBoss === user) {
            return (
              <MenuItem value={user}>
                {user}
                <img src={BossIcon} style={{ width: 25, height: 25 }} />
              </MenuItem>
            );
          } else {
            return <MenuItem value={user}>{user}</MenuItem>;
          }
        })}
      </Select>
    </FormControl>
  );
};

export default ChooseUser;
