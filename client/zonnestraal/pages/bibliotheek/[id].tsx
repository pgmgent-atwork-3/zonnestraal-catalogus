import React, { useState } from 'react';
import client from '../../lib/apollo-client';
import { gql } from "@apollo/client";
import styled from 'styled-components';
import { GoBack, PrimaryButton, SecondaryButton } from '../../components/Buttons';
import ReservationButton from '../../components/Buttons/ReservationBtn';
import { useAuth } from '../../lib/auth';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 85rem;
  max-width: 100%;
  padding: 0 ${({ theme }) => theme.paddings.normal};
  margin: 0 auto;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.normal};
  }
`

const ItemDescription = styled.div`
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

const TextContainer = styled.div`
  margin-top:${({ theme }) => theme.margins.small};
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 65%;
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
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom:${({ theme }) => theme.margins.normal};
  font-size:${({ theme }) => theme.fontSizes.headline6};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    font-size:${({ theme }) => theme.fontSizes.headline5};
  }
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

export async function getServerSideProps(context: any) {
  const {params} = context
  const {id} = params

  const { data } = await client.query({
    query: gql`
    query {
      getLibraryById(id: ${id}){
       serial
       title
       description
       publisher
       author
       year
       created_on
       edited_on
       hidden
       language
       type {
         id
         title
       }
       location {
         id
         title
         street
         number
         zip
         city
         country
         lat
         lng
       }
       rent {
         name
         rent_from
         rent_till
         returned
       }
       reservation {
         id
         name
         deleted
         created_on
       }
     } 
    }
    `
  });
  
  return {
    props: {
      detail: data.getLibraryById,
    },
 };
}

const Detail = ({ detail }: any) => {
  const { isSignedIn }:any = useAuth();

  const rentArray = detail.rent
  const lastRent = rentArray[rentArray.length -1]

  if (!detail) {
    return <p>Sorry, er is geen data te vinden voor dit boek.</p>
  } 

  return (
    <ContentContainer>
      <GreyContainer key={detail.id}>
        <TextContainer>
          <ItemTitle>{detail.title}</ItemTitle>

          <Group>
            <SubItemTitle>Author</SubItemTitle>
            <p>{detail.author ? detail.author : 'geen auteur'}</p>
          </Group>

          <Group>
            <SubItemTitle>Publisher</SubItemTitle>
            <p>{detail.publisher ? detail.publisher : 'geen publisher'}</p>
          </Group>

          <Group>
            <SubItemTitle>Type</SubItemTitle>
            <p>{detail.type.title}</p>
          </Group>

          <Group>
            <SubItemTitle>Serienummer</SubItemTitle>
            <p>{detail.serial}</p>
          </Group>

          <Group>
            <SubItemTitle>Status</SubItemTitle>
            {lastRent == undefined ? 'Beschikbaar' : lastRent?.returned == 'Y' || undefined ? 'Beschikbaar' : 'Niet beschikbaar'}
            {/* {lastRent?.returned == 'Y' || undefined ? 'Beschikbaar' : 'Niet beschikbaar'} */}
          </Group>

          <Group>
            <SubItemTitle>Locatie</SubItemTitle>
            <p>{detail.location.title}</p>
          </Group>

          <Group>
            <SubItemTitle>Datum laatste leenbeurt</SubItemTitle>
            {rentArray.length > 0 &&
              <p>{new Date(lastRent.rent_from).toLocaleDateString()} - {new Date(lastRent.rent_till).toLocaleDateString()}</p>
            }
          </Group>

          <DescriptionGroup>
            <SubItemTitle>Beschrijving</SubItemTitle>
            <ItemDescription dangerouslySetInnerHTML={{__html:detail.description.replace(/\\r\\n/g,'')}}></ItemDescription>
          </DescriptionGroup>
        </TextContainer>

        {isSignedIn() && 
          <ButtonContainer>
            <SecondaryButton title="Uitlenen"/>
            <ReservationButton title="Reserveren" name={detail.serial}/>
            <GoBack title="Ga terug naar overzicht"/>
          </ButtonContainer> 
        }
        
      </GreyContainer>
    </ContentContainer>
  );
}

export default Detail;