import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

interface IChooseUser {
  user: string;
  setUser: Function;
}

const ChooseUser = ({ user, setUser }: IChooseUser) => {
  return (
    <FormControl sx={{ width: '200px' }}>
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
        <MenuItem value={'Andriy'}>Andriy</MenuItem>
        <MenuItem value={'Ivan'}>Ivan</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ChooseUser;
