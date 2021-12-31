import PopUp from '../components/Pop-up/pop-up';
import Hero from '../components/Hero/Hero';
import { useState } from 'react';
import styled from 'styled-components';
import PopUpButton from '../components/Buttons/PopUpButton';
import Headline1 from '../components/Typo/Headline1';
import BookCard from '../components/Cards/BookCard';

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background: ${({ theme }) => theme.colors.yellow};
  justify-content: center;
  align-items: center;
  padding:  ${({ theme }) => theme.paddings.normal};
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    flex-direction: row;
  }
`

const MoreInfoContainer = styled.div<{show: Boolean}>`
  position: absolute;
  top: 20rem;
  display: ${({ show }) => (show ? "none" : "fixed")};
  width: 80%;
  background: ${({ theme }) => theme.colors.white};
  padding:  ${({ theme }) => theme.paddings.normal};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    top: 12rem;
  }
`

const ContentContainer = styled.div`
  padding: ${({ theme }) => theme.paddings.normal} ${({ theme }) => theme.paddings.normal};
`

const Home = () => {
  const [show, setShow] = useState(true);
  
  return (
    <>
      <PopUpContainer>
        <PopUpButton title="?" onClick={() => setShow(!show)} />
        <PopUp text={'Zonnestraal vzw, een voorziening voor personen met een verstandelijke beperking te Lennik, heet u welkom op de reservatiemodule!'}/>
        <MoreInfoContainer show={show}>
          <p>
            Zonnestraal vzw, een voorziening voor personen met een verstandelijke beperking te Lennik, heet u welkom op de reservatiemodule!
            Via deze website kan u voertuigen en vergaderzalen reserveren en tal van boeken, tijdschriften en mediamateriaal bekijken en ontlenen.
            U heeft daarvoor een login nodig met wachtwoord.
            Voor bijkomende vragen kan u steeds contact opnemen met de verantwoordelijke via het nummer 02/531 01 01.
          </p>
        </MoreInfoContainer>
      </PopUpContainer>

      <Hero/>

      <ContentContainer>
        <Headline1 title="Nieuwe aanwinsten"/>
        <BookCard data={Books} />
      </ContentContainer>
    </>
  )
}

export default Home;


// Test with static props
/* export const getStaticProps = async () => {
  const res = await fetch(`https://superhero-search.p.rapidapi.com/api/heroes`)
  const heroes = await res.json()

  return {
    props: {
      heroes
    }
  }
} */

const Books = 
[
  {
    id: 42,
    serial: 42,
    title: "Ontdek wie je bent - Een speurtocht naar jezelf (m...",
    description:"Interactieve map",
    author:"BOSCH SUYKERBUYK",
    year: null,
    location_id: 1,
    created_on: "2013-09-04 10:13:34",
    edited_on: "2013-09-04 10:13:34",
    hidden: "N",
    type_id: 8,
    language: "nl",
    meta_id: 128
  },
  {
    id: 24,
    serial: 24,
    title: "ANDERS ZIJN",
    description:"Over mensen die anders zijn",
    author:"VDA",
    year: null,
    location_id: 1,
    created_on: "2013-09-04 09:16:16",
    edited_on: "2013-09-04 09:16:16",
    hidden: "N",
    type_id: 1,
    language: "nl",
    meta_id: 92
  }
]