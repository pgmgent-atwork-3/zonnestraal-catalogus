import Head from "next/head";
import styled from 'styled-components';
import { useState } from "react";

//Fetching
import { GET_MEDIA_AND_BOOKS_QUERY } from '../../graphql/mediaAndBooks';
import client from '../../lib/apollo-client';
import {CardLarge} from "../../components/Cards";
import { GetAllBooks } from "../../interfaces/api/getAllBooks";
import { GetAllMedia } from "../../interfaces/api/getAllMedia";
import SearchBar from "../../components/Search/SearchBar";

const ContentContainer = styled.div`
  width: 85rem;
  max-width: 100%;
  padding: 0 ${({ theme }) => theme.paddings.normal};
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    align-items: start;
    flex-direction: row;
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.extraLarge};
  }
`

const FilterContainer = styled.div`
  width: 100%;
  height: 20rem;
  background: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: ${({ theme }) => theme.margins.normal};
  padding: ${({ theme }) => theme.paddings.normal};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 30%;
  }
`

const ResultsContainer = styled.div`
  width: 100%;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 67%;
  }
`

const FilterTitle = styled.span`
  margin-bottom: ${({ theme }) => theme.margins.normal};
  font-weight: 500;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: ${({ theme }) => theme.margins.extraSmall};
  }
`

const LibraryPage = ({ books, media } : {books: GetAllBooks, media: GetAllMedia}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checked, setChecked] = useState(false);

  console.log(checked);

    /* books en media bevatten data */
    return (
      <>
        <Head>
            <title>Catalogus - Zonnestraal</title>
        </Head>

        <ContentContainer>

          <FilterContainer>
            <>
              <FilterTitle>Zoeken</FilterTitle>
              <SearchBar type="text" placeholder="Zoek op titel of auteur" onChange={event => {setSearchTerm(event.target.value)}}/>

              <FilterTitle>Filter</FilterTitle>
              <CheckboxContainer>
                <input type="checkbox" id="book" name="Boek" onChange={event => setChecked(event.target.checked)}/>
                <p>Book</p>  
              </CheckboxContainer> 
              <CheckboxContainer>
                <input type="checkbox" id="map" name="Map" onChange={event => setChecked(event.target.checked)}/>
                <p>Map</p>  
              </CheckboxContainer>
            </>
          </FilterContainer>

          <ResultsContainer>
            <CardLarge checked={checked} searchTerm={searchTerm} books={books} media={media}/>
          </ResultsContainer>

        </ContentContainer>
      </>
    );
};

export default LibraryPage;

/* Fetch data */
export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_MEDIA_AND_BOOKS_QUERY,
  });
  
  if (data){
    return {
      props: {
        books: data.getAllLibraries,
        media: data.getAllMedia
      },
   };
  } else {
    return 'No data';
  }
}