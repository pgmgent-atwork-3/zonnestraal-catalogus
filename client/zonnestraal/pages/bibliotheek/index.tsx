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
import { GetServerSideProps } from 'next';

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

const StyledSelect = styled.select`
  height: 2.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  display: block;
  margin-top: ${({ theme }) => theme.margins.extraSmall};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 100%;
  }
`

const LibraryPage = ({ books, media } : {books: GetAllBooks, media: GetAllMedia}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checked, setChecked] = useState(false);
  const [ selected, setSelected ] = useState();

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
              <SearchBar type="text" placeholder="Zoek op titel of auteur" onChange={(event:any) => {setSearchTerm(event.target.value)}}/>

              <FilterTitle>Filter</FilterTitle>
              <StyledSelect name="Alle velden" value={selected} onChange={(e:any) => setSelected(e.target.value)}>
                <option value="" selected>Selecteer een type</option>
                <option value="Map">Map</option>
                <option value="Boek">Boek</option>
                <option value="Tijdschrift">Tijdschrift</option>
                <option value="Brochure">Brochure</option>
                <option value="CD-ROM">CD-ROM</option>
                <option value="Thesis">Thesis</option>
                <option value="Educatief materiaal">Educatief materiaal</option>
                <option value="Casette">Casette</option>
                <option value="CD">CD</option>
                <option value="Map Bewoners">Map Bewoners</option>
                <option value="Video">Video</option>
              </StyledSelect>
            </>
          </FilterContainer>

          <ResultsContainer>
            <CardLarge searchTerm={searchTerm} books={books} selected={selected} />
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