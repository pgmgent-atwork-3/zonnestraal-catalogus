import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'
import { useMutation } from '@apollo/client';
import {CREATE_LIBRARY_RESERVATION_MUTATION} from '../../graphql/mutations/createLibraryReservation';
import { PrimaryButton } from '../Buttons';
import moment from 'moment';

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

const FormContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
  }
`

const OverviewContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.paddings.normal};
  margin-top: ${({ theme }) => theme.margins.normal};

`

export default function DatePickerDef({id}:any) {
  const [value, setValue] = React.useState<DateRange<Date>>([new Date("2022-01-11T12:00:00"), new Date("2022-01-11T12:00:00")]);
  const [ selectedDate, setSelectedDate] = useState(new Date("2022-01-11T12:00:00"));
  const [searchTerm, setSearchTerm] = useState('');
  const [ mutate ] = useMutation(CREATE_LIBRARY_RESERVATION_MUTATION, {
    onCompleted: (response: any) => {
      console.log(response)
    },
    onError: (error) => {
      console.log(`error: ${error.message}`);
    }
  });

  const from_date = moment(value[0]).format("YYYY-MM-DD hh:mm:ss");
  const till_date = moment(value[1]).format( "YYYY-MM-DD hh:mm:ss");

  const handleChange = (date: any) => {
    setSelectedDate(date)
  }

  return (
    <>
      <FormContainer>

        <input name='name' placeholder='Jouw naam' onChange={(event:any) => {setSearchTerm(event.target.value)}}/>

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

      </FormContainer>
 
      <OverviewContainer>
        <h3>Overzicht</h3>
        <p>Van: {from_date} tot {till_date}</p>
        <p>Naam: {searchTerm}</p>
        <button title="Plaats reservatie" onClick={ () => mutate({ 
          /* fetchPolicy: "network-only", */
          variables: { 
            createLibraryReservationInput: {
              library_id: id, 
              name: searchTerm, 
              createLibraryReservationDateInput: {
                from_date: from_date, 
                till_date: till_date  
              }
            }
          }
        })}>Plaats reservatie</button>
      </OverviewContainer>

    </>
  );
}