import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../Buttons'
import ReservationButton from '../Buttons/ReservationBtn'
import ReservationButtonCars from '../Buttons/ReservationBtnCars'

interface Props {
  
}

const StyledCard = styled.div`
  padding: ${({ theme }) => theme.paddings.normal};
  background: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom:${({ theme }) => theme.margins.normal};
  width: 100%;

  @media (min-width: ${({theme}) => theme.width.tablet}) {
    align-items: center;
    justify-content: space-between;
    width: 49%;
  }
`

const ItemTitle = styled.h3`
  margin-bottom:${({ theme }) => theme.margins.extraSmall};
  width: 25%;
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`

const SubItemTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
  color: ${({ theme }) => theme.colors.darkBlue};
  display: block;
  margin-top:${({ theme }) => theme.margins.extraSmall};
  text-transform: uppercase;
  font-weight: 600;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: block;

  a {
    width: 100%;
    margin-top:${({ theme }) => theme.margins.normal};
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 20%;
  }
`


const CarCard = ({data}:any) => {
  const slicedData = data.slice(0, 10)
  return (
    <>
      {slicedData.map((data:any) => (
        <StyledCard>
          <ItemTitle>{data.title}</ItemTitle>
          <Group>
            <SubItemTitle>Merk</SubItemTitle>
            <p>{data.brand}</p>
          </Group>
          <Group>
            <SubItemTitle>Type</SubItemTitle>
            <p>{data.type}</p>
          </Group>
          <ButtonContainer>
            <ReservationButtonCars title="Reserveren" name={data.id}/>
          </ButtonContainer>
        </StyledCard>
       ))}
    </>
  )
}

export default CarCard
