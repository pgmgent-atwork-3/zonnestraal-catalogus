import Head from "next/head";
import TestData from "../../components/TestData";

//Fetching
import { GET_MEDIA_AND_BOOKS_QUERY } from '../../graphql/mediaAndBooks';
import client from '../../lib/apollo-client';


function LibraryPage() {
    /* books en media bevatten data */
    return (
      <>
        <Head>
            <title>Catalogus - Zonnestraal</title>
        </Head>

        <h1>This is the library</h1>
        {/* <TestData data={media}/> */}
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