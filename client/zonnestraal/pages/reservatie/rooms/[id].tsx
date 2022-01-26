import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { ReservationFormMedia } from '../../../components/Forms';
import {GET_ONE_ROOM} from '../../../graphql/getOneRoomById';
import ReservationFormRooms from '../../../components/Forms/ReservationFormRooms';

interface Props {
  
}

const ContentContainer = styled.div`
  width: 85rem;
  height: calc(100vh - 10rem);
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

const ReservationPageMedia = () => {
  const router = useRouter()
  const { id }:any = router.query
  const intId = parseInt(id)

  const { loading, error, data } = useQuery(GET_ONE_ROOM, {
    variables: { id: intId }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const roomsData = data.getOneBuildingsRoomById

  return (
    <ContentContainer>
      <h2>
        Reservatie van
        <ReservationTitle>"{roomsData.title}"</ReservationTitle>
      </h2>
      
      <ReservationFormRooms roomId={intId} />
    </ContentContainer>
  )
}

export default ReservationPageMedia
