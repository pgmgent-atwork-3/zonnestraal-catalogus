import React from 'react';
import styled from 'styled-components';
import ReservationForm from '../../components/Forms/ReservationForm';
import { useRouter } from 'next/router';

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

const ReservationPage = (props: Props) => {
  const { query } = useRouter();
  console.log(query)

  return (
    <ContentContainer>
      <h2>
        Reservatie van
        <ReservationTitle>"{query.name}"</ReservationTitle>
      </h2>
      
      <ReservationForm />
    </ContentContainer>
  )
}

export default ReservationPage
