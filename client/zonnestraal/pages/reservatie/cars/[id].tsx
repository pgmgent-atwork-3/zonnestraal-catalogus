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
      getOneTransportById(id: ${id}){
      title
      brand
      type
      number
      color
      color_calendar
      remarks
      created_on
      edited_on
        
      
      reservation {
        id
        from_date
        till_date
        profile {
          id
          display_name
        }
        name
        created_on
        edited_on
        
      }  
      fixedReservation {
        id
        name
        profile{
          id
          display_name
        }
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
    }
    }
    `
  });
  
  return {
    props: {
      detail: data.getOneTransportById,
    },
 };
}

const ReservationPageCars = ({detail}:any) => {
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

export default ReservationPageCars
