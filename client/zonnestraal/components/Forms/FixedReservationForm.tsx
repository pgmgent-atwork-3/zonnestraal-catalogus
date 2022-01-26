import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {CREATE_TRANSPORT_FIXED_RESERVATION} from '../../graphql/mutations/createTransportFixedReservation';
import { PrimaryButton } from '../Buttons';
import moment from 'moment';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    input {
      width: 48%;
    }  
  }
`

const OverviewContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.paddings.normal};
  margin-top: ${({ theme }) => theme.margins.normal};

  button {
    width: 50%;
    margin-top: ${({ theme }) => theme.margins.normal};
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 48%;
    position: absolute;
    top: 10rem;
    right: 0;  
  }

`

export default function FixedReservationForm({ car, frequency }:any) {
  const [value, setValue] = React.useState<DateRange<Date>>([new Date(), new Date()]);
  const [ selectedDateFrom, setSelectedDateFrom] = React.useState<Date | null>(new Date("2022-01-11T12:00:00"));
  const [ selectedDateTill, setSelectedDateTill] = React.useState<Date | null>(new Date("2022-01-11T12:00:00"));
  const [searchTerm, setSearchTerm] = useState('');
  const [mutate, { loading, error, data }] = useMutation(CREATE_TRANSPORT_FIXED_RESERVATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, er is iets fout gelopen tijdens de reservatie! {error}</p>;
  if (data) return <p>Je reservatie is succesvol verwerkt!</p>;

  const from_date = moment(value[0]).format("YYYY-MM-DD");
  const till_date = moment(value[1]).format( "YYYY-MM-DD");
  const from_time = moment(selectedDateFrom).format("hh:mm:ss");
  const till_time = moment(selectedDateTill).format( "hh:mm:ss");

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
              label='Kies een startuur'
              value={selectedDateFrom}
              onChange={(newValue) => {
                setSelectedDateFrom(newValue);
              }}
              KeyboardButtonProps={{
                'aria-label' : 'change hour'
              }}
            />
          </PickerContainer>
        </MuiPickersUtilsProvider>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <PickerContainer>
            <KeyboardTimePicker
              disableToolbar
              variant='inline'
              margin='normal'
              id='time-picker'
              label='Kies een eindtijd'
              value={selectedDateTill}
              onChange={(newValue):any => {
                setSelectedDateTill(newValue);
              }}
              KeyboardButtonProps={{
                'aria-label' : 'change hour'
              }}
            />
          </PickerContainer>
        </MuiPickersUtilsProvider>

      </FormContainer>
 
      <OverviewContainer>
        <h3>Overzicht</h3>
        <p>Wagen: {car}</p>
        <p>Frequentie: {frequency}</p>
        <p>Naam: {searchTerm}</p>
        <p>Periode: {from_date} tot {till_date}</p>
        <p>Tijd: {from_time} tot {till_time}</p>
        <PrimaryButton title="Plaats reservatie" onClick={ () => mutate({ 
          variables: { 
            createTransportFixedReservationInput: {
              transport_id: car, 
              name: searchTerm,
              frequency: "weekly",
              from_date: from_date, 
              till_date: till_date,
              start_time: from_time, 
              end_time: till_time  
            }
          }
        })}>Plaats reservatie</PrimaryButton>
      </OverviewContainer>
    </>
  );
}