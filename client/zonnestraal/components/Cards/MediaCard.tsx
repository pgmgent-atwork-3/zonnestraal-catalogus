import React from 'react'
import { DefaultLink, PrimaryButton, SecondaryButton } from '../Buttons';
import styled from 'styled-components';
import BookIcon from '../../public/icon-book-open.png';
import Image from 'next/image'
import Link from 'next/link';
import { Book } from '../../interfaces/models/book';
import { FiMapPin } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { FiFilm } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";

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
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.width.tablet}) {
    flex-direction: row;
  }
`

const StyledCard = styled.div`
  cursor: pointer;
  display: flex;
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

const IconContainer = styled.div`
  margin-top:${({ theme }) => theme.margins.small};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    svg {
      font-size: 4rem;
      color: ${({ theme }) => theme.colors.darkBlue};
      stroke-width: 1;
    }
  }
`

const MediaCard = ({ data }) => {
  const NewData = data.slice(0,3);

  console.log(NewData);

  return (
    <CardsContainer>
        {NewData.map(m => (
          <Link href={'/bibliotheek/' + m.id}>
            <StyledCard>
              <GreyContainer>
                <IconContainer>
                  {(() => {
                    switch (m.type.title) {
                      case 'GPS':
                        return <FiMapPin/>;
                      case 'Camera':
                        return <FiCamera/>;
                      case 'IT':
                        return <FiMonitor/>;
                      default:
                        return <FiFilm/>;
                    }
                  })()}
                </IconContainer>
                <DefaultLink title="Meer info"/>
                <SecondaryButton title="Uitlenen"/>
                <PrimaryButton title="Reserveren"/>
              </GreyContainer>

              <TextContainer>
                <ItemTitle>{m.title}</ItemTitle>
              </TextContainer>
            </StyledCard>
          </Link>
        ))}
      </CardsContainer>
  )
}

export default MediaCard;


