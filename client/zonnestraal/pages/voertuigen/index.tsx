import client from "../../lib/apollo-client";
import React from "react";
import {GET_ALLL_BOOKS_QUERY} from "../../graphql/getAllBooks";
import { GET_ALLL_BUILDINGS } from "../../graphql/getAllBuildings";
import { GET_ALL_CARS_QUERY } from "../../graphql/getAllCars";
import { GetAllCars } from "../../interfaces/api/getAllCars";
import { CarCard } from "../../components/Cards";
import styled from "styled-components";
import Schedule from "../../components/Agenda/schedule";
import {useAuth} from '../../lib/auth';

/* import { gql, useQuery } from '@apollo/client';
 */
const ContentContainer = styled.div`
  width: 85rem;
  max-width: 100%;
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

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_ALL_CARS_QUERY,
  });

  return {
    props: {
      cars: data.getAllCars
    },
 };
}

function CarPage({ cars } : {cars: GetAllCars}) {
  console.log(cars)

  return (
    <ContentContainer>
      <CarCard data={cars} />
      <ScheduleContainer>
        <Schedule />
      </ScheduleContainer>
    </ContentContainer>
  )
}

export default CarPage;