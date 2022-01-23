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
      getOneBuildingsRoomById(id: ${id}){
      title
      color_calendar
      building {
        id
        title
      } 
      roomReservation {
        from_date
        till_date
        profile {
          id
        }
        name
        created_on
        edited_on
        
      }  
      fixedReservation {
        name
        profile_id
        from_date
        till_date
        start_time
        end_time
        frequency
        created_on
        excepions {
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
      detail: data.getOneBuildingsRoomById,
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
