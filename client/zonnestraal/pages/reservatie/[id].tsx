import React from 'react';
import styled from 'styled-components';
import ReservationForm from '../../components/Forms/ReservationForm';
import { useRouter } from 'next/router';
import client from '../../lib/apollo-client';
import { gql } from '@apollo/client';

interface Props {
  
}

const ContentContainer = styled.div`
  width: 85rem;
  max-width: 100%;
  padding: ${({ theme }) => theme.paddings.normal} ${({ theme }) => theme.paddings.normal};
  margin: 0 auto;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.extraLarge};
  }
`

const ReservationTitle = styled.h2`
  color: ${({ theme }) => theme.colors.yellow};
`

export async function getServerSideProps(context: any) {
  const {params} = context
  const {id} = params
  
  const { data } = await client.query({
    query: gql`
    query {
      getLibraryById(id: ${id}){
       serial
       title
       description
       publisher
       author
       year
       created_on
       edited_on
       hidden
       language
       type {
         id
         title
       }
       location {
         id
         title
         street
         number
         zip
         city
         country
         lat
         lng
       }
       rent {
         name
         rent_from
         rent_till
         returned
       }
       reservation {
         id
         name
         deleted
         created_on
       }
     } 
    }
    `
  });
  
  return {
    props: {
      detail: data.getLibraryById,
    },
 };
}

const ReservationPage = ({detail}:any) => {
  return (
    <ContentContainer>
      <h2>
        Reservatie van
        <ReservationTitle>"{detail.title}"</ReservationTitle>
      </h2>
      
      <ReservationForm data={detail}/>
    </ContentContainer>
  )
}

export default ReservationPage
