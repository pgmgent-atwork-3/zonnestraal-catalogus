import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../Buttons'

interface Props {
  
}

const StyledCard = styled.div`
  padding: ${({ theme }) => theme.paddings.normal};
  background: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:${({ theme }) => theme.margins.normal};
  width: 49%;
`

const ItemTitle = styled.h3`
  margin-bottom:${({ theme }) => theme.margins.extraSmall};
  width: 35%;
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
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
  width: 20%;

  a {
    width: 100%;
  }
`


const CarCard = ({data}) => {
  const slicedData = data.slice(0, 10)
  return (
    <>
      {slicedData.map(data => (
        <StyledCard>
          <ItemTitle>{data.author}</ItemTitle>
          <Group>
            <SubItemTitle>Merk</SubItemTitle>
            <p>{data.id}</p>
          </Group>
          <Group>
            <SubItemTitle>Type</SubItemTitle>
            <p>{data.id}</p>
          </Group>
          <ButtonContainer>
            <PrimaryButton title="Reserveren"/>
          </ButtonContainer>
        </StyledCard>
       ))}
    </>
  )
}

export default CarCard
