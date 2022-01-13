import client from "../../lib/apollo-client";
import React from "react";
import {GET_ALLL_BOOKS_QUERY} from "../../graphql/getAllBooks";
import { GetAllCars } from "../../interfaces/api/getAllCars";
import { CarCard} from "../../components/Cards";
import styled from "styled-components";

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


export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_ALLL_BOOKS_QUERY,
  });

  return {
    props: {
      cars: data.getAllLibraries
    },
 };
}

function CarPage({ cars } : {cars: GetAllCars}) {
  console.log(cars)
  return (
    <ContentContainer>
      <CarCard data={cars} />
    </ContentContainer>
  )
}

export default CarPage;