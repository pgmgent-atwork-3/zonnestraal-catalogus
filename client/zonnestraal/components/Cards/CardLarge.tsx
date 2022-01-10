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

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    flex-direction: column;
  }
`

const StyledCard = styled.div`
  position: relative;
  margin-bottom:${({ theme }) => theme.margins.normal};
  cursor: pointer;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 100%;
    margin-right:${({ theme }) => theme.margins.normal};
  }
`

const GreyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.paddings.normal};
  padding-top:${({ theme }) => theme.margins.large};
  transition: background-color 1s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    align-items: start;
    flex-direction: row;
    justify-content: space-around;
  }
`

const IconContainer = styled.div`
  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 10%;

    span {
      width: 4rem;
    }
  }
`

const TextContainer = styled.div`
  margin-top:${({ theme }) => theme.margins.small};
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 50%;
    margin-top: 0;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:${({ theme }) => theme.margins.normal};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 30%;
    margin-top: 0;

    a {
      width: 100%;
    }
  }
`

const ItemTitle = styled.h3`
  display: block;
  width: 100%;
  margin-bottom:${({ theme }) => theme.margins.extraSmall};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    font-size:${({ theme }) => theme.fontSizes.headline6};
  }
`

const ItemDescription = styled.div`
  height: 100px;
  width: 100%
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const SubItemTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
  color: ${({ theme }) => theme.colors.darkBlue};
  display: block;
  margin-top:${({ theme }) => theme.margins.extraSmall};
  text-transform: uppercase;
  font-weight: 600;
`

const Group = styled.div`
  width: 50%;
`

const DescriptionGroup = styled.div`
  display: block;
  width: 100%;
`

const CardLarge = ({ books, media }) => {
const pagedBooks = books.slice(0,10);

  console.log(pagedBooks)

  return (
    <CardsContainer>
        {pagedBooks.map(b => (
          <Link href={'/bibliotheek/' + b.id}>
            <StyledCard key={b.id}>
              <GreyContainer>

                <IconContainer>
                  <Image src={BookIcon} height={80} width={80}/>
                </IconContainer>

                <TextContainer>
                  <ItemTitle>{b.title}</ItemTitle>

                  <Group>
                    <SubItemTitle>Author</SubItemTitle>
                    <p>{b.author ? b.author : 'geen auteur'}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Publisher</SubItemTitle>
                    <p>{b.publisher ? b.publisher : 'geen publisher'}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Type</SubItemTitle>
                    <p>{b.type.title}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Serienummer</SubItemTitle>
                    <p>{b.serial}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Status</SubItemTitle>
                    <p>beschikbaar</p>
                  </Group>

                  <DescriptionGroup>
                    <SubItemTitle>Beschrijving</SubItemTitle>
                    <ItemDescription dangerouslySetInnerHTML={{__html:b.description.replace(/\\r\\n/g,'')}}></ItemDescription>
                  </DescriptionGroup>
                </TextContainer>

                <ButtonContainer>
                  <SecondaryButton title="Uitlenen"/>
                  <PrimaryButton title="Reserveren"/>
                </ButtonContainer>

              </GreyContainer>

            </StyledCard>
          </Link>
        ))}
      </CardsContainer>
  )
}

export default CardLarge;


