import React from 'react'
import Img from '../public/banner.jpeg';
import styled from 'styled-components';
import Image from 'next/image'
import { PrimaryButton, SecondaryButton } from '../Buttons';
import Link from 'next/link';

interface Props {
  image?: string;
}

const StyledHero = styled.div`
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% 30%;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchContainer = styled.div`
  width: 90%;
  height: 16rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding:  ${({ theme }) => theme.paddings.normal};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 60%;
    height: 11rem;
  }
`

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    flex-wrap: no-wrap;
    justify-content: space-between;
  }
`

const StyledSelect = styled.select`
  height: 2.5rem;
  width: 30%;
  padding: 0.5rem 1rem;
  outline: none;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 15%;
  }
`

const StyledInput = styled.input`
  width: 100%;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 50%;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top:  ${({ theme }) => theme.margins.small};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 30%;
    gap: 0.5rem;
  }
`

const Hero = (props: Props) => {
  return (
    <>
      <StyledHero style={{ backgroundImage: 'url("https://one-photo.zonnestraal-vzw.be/____gallery/images/5/b36/cfc/b06/a57/8a5/910/228/dea/e1e/7cf/678/7a1/2a7.jpg_l.jpg?progressive&_1&webp")' }}>
        <SearchContainer>
          <h2>Ga op zoek naar media</h2>

          <SearchInputContainer>
            <StyledSelect name="Alle velden">
                <option value="Titel" selected>Titel</option>
                <option value="Auteur">Auteur</option>
                <option value="Trefwoord">Trefwoord</option>
            </StyledSelect>

            <StyledInput type="search" id="site-search" name="q" aria-label="Search through site content" placeholder="Zoek op titel, auteur of trefwoord" /> 

            <ButtonContainer>
              <SecondaryButton title="Clear"/>      
              <Link href={'bibliotheek'}>
                <PrimaryButton title="Zoeken"/>
              </Link>
            </ButtonContainer>

          </SearchInputContainer>
        </SearchContainer>
      </StyledHero>
    </>
    )
}

export default Hero;
