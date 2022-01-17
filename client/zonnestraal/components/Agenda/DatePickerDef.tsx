import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'

const PickerContainer = styled.div`
  margin-top:${({ theme }) => theme.margins.normal};
  width: 50%;

  input {
    display: flex;
    elign-items: center;
    margin-top:${({ theme }) => theme.margins.small};
    padding:${({ theme }) => theme.paddings.small};
  }

  label {
    margin-top: 0;
    padding-top: 0;
  }
`

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState<DateRange<Date>>([new Date("2022-01-11T12:00:00"), new Date("2022-01-11T12:00:00")]);
  const [ selectedDate, setSelectedDate] = useState(new Date("2022-01-11T12:00:00"));

  console.log(value)

  const handleChange = (date: any) => {
    setSelectedDate(date)
  }

  return (
    <>
      <PickerContainer>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Begindatum"
            endText="Einddatum"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> tot </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />

        </LocalizationProvider>
      </PickerContainer>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <PickerContainer>
          <KeyboardTimePicker
            disableToolbar
            variant='inline'
            margin='normal'
            id='time-picker'
            label='Kies een uur'
            value={selectedDate}
            onChange={handleChange}
            KeyboardButtonProps={{
              'aria-label' : 'change hour'
            }}
          />
        </PickerContainer>
      </MuiPickersUtilsProvider>


      {/* <div>
        <h3>Overzicht</h3>
        {value.map((v) => {
          return <span>{v}</span>
        })}
      </div> */}
    </>
  );
}