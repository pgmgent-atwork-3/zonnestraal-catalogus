import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';
import FixedReservationForm from '../../../components/Forms/FixedReservationForm';
import {GET_ALL_CARS_QUERY} from '../../../graphql/getAllCars';

interface Props {
  
}

const ContentContainer = styled.div`
  width: 85rem;
  max-width: 100%;
  padding: ${({ theme }) => theme.paddings.normal} ${({ theme }) => theme.paddings.normal};
  margin: 0 auto;
  min-height: calc(100vh - 5rem);

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.extraLarge};
  }
`

const StyledSelect = styled.select`
  height: 2.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  display: block;
  margin-top: ${({ theme }) => theme.margins.extraSmall};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 48%;
  }
`


const ReservationPageFixedReservations = () => {
  const { loading, error, data } = useQuery(GET_ALL_CARS_QUERY)
  const [selected, setSelected] = useState();
  const [frequency, setFrequency] = useState();

  const intId = parseInt(selected!)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <ContentContainer>
      <h2>
        Vaste reservatie
      </h2>

      <StyledSelect name="Alle velden" value={selected} onChange={(e:any) => setSelected(e.target.value)}>
        <option value="" selected>Selecteer een auto</option>
        <option value="21">Ford Transit</option>
        <option value="5">Ford Transit Wit</option>
        <option value="9">FIAT</option>
        <option value="19">Citroën Cactus</option>
        <option value="7">Ford Transit Rood</option>
        <option value="4">Opel Vivaro</option>
        <option value="10">VW Passat</option>
        <option value="18">FIAT DOBLO</option>
        <option value="20">Citroen Nemo</option>
      </StyledSelect>

      <StyledSelect name="Alle velden" value={selected} onChange={(e:any) => setFrequency(e.target.value)}>
        <option value="" selected>Selecteer frequenty</option>
        <option value="Daily">Dagelijks</option>
        <option value="Weekly">Weekelijks</option>
        <option value="monthly">Maandelijks</option>
      </StyledSelect>

      <FixedReservationForm car={intId} frequency={frequency}/>
    </ContentContainer>
  )
}

export default ReservationPageFixedReservations;
