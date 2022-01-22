import React from 'react'
import { DefaultLink, DisabledButton, DisabledButtonSec, PrimaryButton, SecondaryButton } from '../Buttons';
import styled from 'styled-components';
import BookIcon from '../../public/icon-book-open.png';
import Image from 'next/image'
import Link from 'next/link';
import { Library } from '../../interfaces/models/library';
import { FiMapPin } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { FiFilm } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import ReservationButton from '../Buttons/ReservationBtn';
import {useAuth} from '../../lib/auth';

/* interface Props {
  data: Book[];
} */

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

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MediaCard = ({ data } : {data : Library}) => {
  const NewData = data.slice(0,3);

  const { isSignedIn }:any = useAuth();

  //console.log(NewData);

  return (
    <CardsContainer>
        {NewData.map((m:any) => (
          <Link href={'/media/' + m.id}>
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
                {isSignedIn() && 
                  <ButtonContainer>
                    <SecondaryButton title="Uitlenen"/>
                    <ReservationButton title="Reserveren" name={m.title}/>
                  </ButtonContainer>
                }
                {!isSignedIn() && 
                  <ButtonContainer>
                    <DisabledButtonSec title="Uitlenen"/>
                    <DisabledButton title="Reserveren"/>
                  </ButtonContainer>
                }
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


