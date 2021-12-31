import React from 'react'
import { DefaultLink, PrimaryButton, SecondaryButton } from '../Buttons';
import styled from 'styled-components';
import BookIcon from '../../public/icon-book-open.png';
import Image from 'next/image'

interface Props {
  data: data[];
}

const GreyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.paddings.normal};
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.width.tablet}) {
    flex-direction: row;
  }
`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:${({ theme }) => theme.margins.normal};

  @media (min-width: ${({theme}) => theme.width.tablet}) {
    width: 20%;
    margin-right:${({ theme }) => theme.margins.normal};
  }
`

const BookCard = ({data}: Props) => {
  return (
    <CardsContainer>
        {data.map(b => (
          <StyledCard>
            <GreyContainer>
              <span>Beschikbaar</span>
              <Image src={BookIcon} height={80} width={80}/>
              <DefaultLink title="Meer info"/>
              <SecondaryButton title="Uitlenen"/>
              <PrimaryButton title="Reserveren"/>
            </GreyContainer>

            <div>
              <h3>{b.title}</h3>
              <p>{b.author}</p>
            </div>
          </StyledCard>
        ))}
      </CardsContainer>
  )
}

export default BookCard;


