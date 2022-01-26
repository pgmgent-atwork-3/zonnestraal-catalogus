import { useState } from 'react';

//Components
import PopUp from '../components/Pop-up/pop-up';
import Hero from '../components/Hero/Hero';
import styled from 'styled-components';
import PopUpButton from '../components/Buttons/PopUpButton';
import Headline1 from '../components/Typo/Headline1';
import BookCard from '../components/Cards/BookCard';

//Fetching
import { GET_MEDIA_AND_BOOKS_QUERY } from '../graphql/mediaAndBooks';
import { GET_NEW_LIBRARIES_AND_MOST_COMMON_MEDIA } from '../graphql/getNewLibrariesAndCommonMedia';
import client from '../lib/apollo-client';
//import { client } from './_app';
import { MediaCard } from '../components/Cards';
import { GetAllBooks } from '../interfaces/api/getAllBooks';
import { GetAllMedia } from '../interfaces/api/getAllMedia';

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
  width: 90%;
  background: ${({ theme }) => theme.colors.white};
  padding:  ${({ theme }) => theme.paddings.normal};
  z-index: 100;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    top: 12rem;
    left: 15rem;
    width: 50%;
  }
`

export const ContentContainer = styled.div`
  width: 85rem;
  max-width: 100%;
  padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.normal};
  margin: 0 auto;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.normal};
  }
`

const Home = ({books, media} : {books: GetAllBooks, media:GetAllMedia}) => {
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
        <BookCard data={books} />

        <Headline1 title="Meest gereserveerde media"/>
        <MediaCard data={media} />
      </ContentContainer>
    </>
  )
}

export default Home;

/* Fetch data */
export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_NEW_LIBRARIES_AND_MOST_COMMON_MEDIA,
  });
  
  return {
    props: {
      books: data.getNewLibraries,
      media: data.getMostCommonlyMedia
    },
 };
}