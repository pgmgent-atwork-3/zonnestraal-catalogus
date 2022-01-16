import React from 'react'
import { DefaultLink, PrimaryButton, SecondaryButton } from '../Buttons';
import styled from 'styled-components';
import Link from 'next/link';
import { Library } from '../../interfaces/models/library';
import { FiBook } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";

/* interface Props {
  data: Library[];
} */

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
  cursor: pointer;
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

const IconContainer = styled.div`
  svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    stroke-width: 1;
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    svg {
      font-size: 5rem;
      stroke-width: 1;
    }
  }
`

const BookCard = ({ data } : {data: Library}) => {
  const NewData = data.slice(0,4);

  //console.log(NewData)

  return (
    <CardsContainer>
        {NewData.map((b:any) => (
          <Link href={'/bibliotheek/' + b.id}>
            <StyledCard>
              <GreyContainer>
                <Availability>Beschikbaar</Availability>
                <IconContainer>
                  {(() => {
                      switch (b.type.title) {
                        case 'Boek':
                          return <FiBook/>;
                        case 'Map':
                          return <FiFolder/>;
                        default:
                          return <FiBookOpen/>;
                        }
                  })()}
                </IconContainer>
                <DefaultLink title="Meer info"/>

                <PrimaryButton title="Reserveren" name={b.title}/>
                <SecondaryButton title='Uitlenen' />
                
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


