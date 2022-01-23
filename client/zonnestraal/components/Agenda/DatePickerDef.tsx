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
import { InputField } from '../Forms';
import { gql, useMutation } from '@apollo/client';

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

const CREATE_LIBRARY_RESERVATION_MUTATION = gql`
mutation {
  createLibraryReservation( createLibraryReservationInput: {
    library_id: $id
    name: $text,
     createLibraryReservationDateInput:{
      from_date: $fromDate
      till_date: $tillDate
    } 
  ){
    name
    library_id
    created_on
    profile_id
  }
  }
` 

export default function DatePickerDef({bookId}:any) {
  const [value, setValue] = React.useState<DateRange<Date>>([new Date("2022-01-11T12:00:00"), new Date("2022-01-11T12:00:00")]);
  const [ selectedDate, setSelectedDate] = useState(new Date("2022-01-11T12:00:00"));
  const [searchTerm, setSearchTerm] = useState('');
  const [mutate, { loading, error, data }] = useMutation(CREATE_LIBRARY_RESERVATION_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, failed to delete item!</p>;
  if (data) return <p>Your item is Deleted!</p>;


  const from_date = value[0]?.toLocaleDateString()
  const till_date = value[1]?.toLocaleDateString()

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

      <input name='name' placeholder='Jouw naam' onChange={(event:any) => {setSearchTerm(event.target.value)}}/>
      
      <div>
        <h3>Overzicht</h3>
        <p>Van: {from_date} tot {till_date}</p>
        <p>Naam: {searchTerm}</p>
      </div>

      <button onClick={ () => mutate({ variables: { id: bookId, text: searchTerm, fromDate: from_date, tillDate: till_date  } })}>Plaats reservatie</button>
    </>
  );
}