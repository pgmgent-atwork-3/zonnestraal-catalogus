import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { ReservationFormMedia } from '../../../components/Forms';
import {GET_ONE_TRANSPORT} from '../../../graphql/getOneTransport';

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

const ReservationPageCars = () => {
  const router = useRouter()
  const { id }:any = router.query
  const intId = parseInt(id)
  console.log(intId)

  const { loading, error, data } = useQuery(GET_ONE_TRANSPORT, {
    variables: { id: intId }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)
  const carsData = data.getOneTransportById

  return (
    <ContentContainer>
      <h2>
        Reservatie van
        <ReservationTitle>"{carsData.title}"</ReservationTitle>
      </h2>
      
      <ReservationFormMedia mediaId={carsData.id}/>
    </ContentContainer>
  )
}

export default ReservationPageCars
