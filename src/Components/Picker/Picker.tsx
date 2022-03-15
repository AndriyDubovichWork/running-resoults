import * as React from 'react';
import style from './Picker.module.css';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import moment from 'moment';

interface IPicker {
  value: Date | null;
  setValue: Function;
}

const Picker = (props: IPicker) => {
  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      props.setValue(newValue.toISOString().split('T')[0]);
    }
  };

  return (
    <div className={style.picker}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDatePicker
            label=''
            inputFormat='dd/MM/yyyy'
            value={props.value}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ width: '200px', margin: '0 auto' }}
              />
            )}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};
export default Picker;
