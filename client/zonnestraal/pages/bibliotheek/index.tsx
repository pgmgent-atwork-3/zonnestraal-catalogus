import Head from "next/head";
import styled from 'styled-components';

//Fetching
import { GET_MEDIA_AND_BOOKS_QUERY } from '../../graphql/mediaAndBooks';
import client from '../../lib/apollo-client';
import {CardLarge} from "../../components/Cards";

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
  background: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: ${({ theme }) => theme.margins.normal};


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

const LibraryPage = ({ books, media }) => {
    /* books en media bevatten data */
    return (
      <>
        <Head>
            <title>Catalogus - Zonnestraal</title>
        </Head>

        <ContentContainer>

          <FilterContainer>
            <p>Hier komt filter</p>
          </FilterContainer>

          <ResultsContainer>
            <CardLarge books={books} media={media}/>
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
  
  return {
    props: {
      books: data.getAllLibraries,
      media: data.getAllMedia
    },
 };
}