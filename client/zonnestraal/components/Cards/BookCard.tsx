import React from 'react'
import { DefaultLink, PrimaryButton, SecondaryButton } from '../Buttons';
import styled from 'styled-components';
import BookIcon from '../../public/icon-book-open.png';
import Image from 'next/image'
import Link from 'next/link';
import { Book } from '../../interfaces/models/book';

interface Props {
  data: Book[];
}

const GreyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.paddings.normal};
  padding-top:${({ theme }) => theme.margins.extraLarge};
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
  position: relative;
  flex-direction: column;
  margin-bottom:${({ theme }) => theme.margins.normal};

  @media (min-width: ${({theme}) => theme.width.tablet}) {
    width: 17rem;
    margin-right:${({ theme }) => theme.margins.normal};
  }
`

const TextContainer = styled.div`
  margin-top:${({ theme }) => theme.margins.small};
`

const ItemTitle = styled.h3`
  margin-bottom:${({ theme }) => theme.margins.extraSmall};
`

const Availability = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.darkBlue};
`

const BookCard = ({ data }) => {
  const NewData = data.slice(0,4);

  console.log(NewData)

  return (
    <CardsContainer>
        {NewData.map(b => (
          <Link href={'/bibliotheek/' + b.id}>
            <StyledCard>
              <GreyContainer>
                <Availability>Beschikbaar</Availability>
                <Image src={BookIcon} height={80} width={80}/>
                <DefaultLink title="Meer info"/>
                <SecondaryButton title="Uitlenen"/>
                <PrimaryButton title="Reserveren"/>
              </GreyContainer>

              <TextContainer>
                <ItemTitle>{b.title}</ItemTitle>
                <p>{b.author}</p>
              </TextContainer>
            </StyledCard>
          </Link>
        ))}
      </CardsContainer>
  )
}

export default BookCard;


