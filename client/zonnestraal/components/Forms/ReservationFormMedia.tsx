import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {CREATE_MEDIA_RESERVATION_MUTATION} from '../../graphql/mutations/createMediaReservation';
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
    margin-top: ${({ theme }) => theme.margins.normal};
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 48%;
  }

`

export default function ReservationFormMedia({ mediaId }:any) {
  const [value, setValue] = React.useState<DateRange<Date>>([new Date("2022-01-11T12:00:00"), new Date("2022-01-11T12:00:00")]);
  const [searchTerm, setSearchTerm] = useState('');
  const [mutate, { loading, error, data }] = useMutation(CREATE_MEDIA_RESERVATION_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, er is iets fout gelopen tijdens de reservatie! {error}</p>;
  if (data) return <p>Je reservatie is succesvol verwerkt!</p>;

  const from_date = moment(value[0]).format("YYYY-MM-DD hh:mm:ss");
  const till_date = moment(value[1]).format( "YYYY-MM-DD hh:mm:ss");

  console.log(mediaId)
  console.log(from_date)
  console.log(till_date)
  console.log(searchTerm)

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
      </FormContainer>
 
      <OverviewContainer>
        <h3>Overzicht</h3>
        <p>Naam: {searchTerm}</p>
        <p>Periode: {from_date} tot {till_date}</p>
        <PrimaryButton title="Plaats reservatie" onClick={ () => mutate({ 
          variables: { 
            createMediaRentInput: {
              media_id: mediaId, 
              name: searchTerm, 
              rent_from: from_date, 
              rent_till: till_date  
            }
          }
        })}>Plaats reservatie</PrimaryButton>
      </OverviewContainer>
    </>
  );
}