import React from 'react';
import styled from 'styled-components';
import ReservationForm from '../../../components/Forms/ReservationForm';
import { useRouter } from 'next/router';
import client from '../../../lib/apollo-client';
import { gql } from '@apollo/client';
import { ReservationFormMedia } from '../../../components/Forms';

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
      getMediaById(id: ${id}){
       title
       description
       created_on
       edited_on
       hidden
       show_home
       language
       type {
         id
         title
         created_on
         edited_on
         language 
       }
       rent {
         id
         name
         rent_from
         rent_till
         returned
       }
       fixedReservation {
         id
         name
         from_date
         till_date
         start_time
         end_time
         frequency
         created_on
         excepions {
           id
           date
           created_on
         }
         
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
         created_on
         edited_on
         show_overview
         
       }
     }
     }
    `
  });
  
  return {
    props: {
      detail: data.getMediaById,
    },
 };
}

const ReservationPageMedia = ({detail}:any) => {
  return (
    <ContentContainer>
      <h2>
        Reservatie van
        <ReservationTitle>"{detail.title}"</ReservationTitle>
      </h2>
      
      <ReservationFormMedia mediaId={detail.id}/>
    </ContentContainer>
  )
}

export default ReservationPageMedia
