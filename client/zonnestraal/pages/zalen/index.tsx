import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_ALLL_BUILDINGS_ROOMS } from '../../graphql/getAllBuildingsRooms'
import { GET_ALL_CARS_QUERY } from '../../graphql/getAllCars';
import { GET_ALLL_BOOKS_QUERY } from '../../graphql/getAllBooks';
import { useAuth } from '../../lib/auth';
import RoomCard from '../../components/Cards/RoomCard';
import styled from 'styled-components';
import ScheduleRooms from '../../components/Agenda/ScheduleRooms';

interface Props {
  
}

export const ContentContainer = styled.div`
  width: 85rem;
  max-width: 100%;
  min-height: calc(100vh - 5rem);
  padding: ${({ theme }) => theme.paddings.normal} ${({ theme }) => theme.paddings.normal};
  margin: 0 auto;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.extraLarge};
  }
`

const ScheduleContainer = styled.div`
  width: 100%;
  margin-top:${({ theme }) => theme.margins.large};
`

const BuildingsPage = (props: Props) => {
  return (
    <ContentContainer>
      <RoomCard />

      <ScheduleContainer>
        <ScheduleRooms />
      </ScheduleContainer>
    </ContentContainer>
  )
}

export default BuildingsPage;

