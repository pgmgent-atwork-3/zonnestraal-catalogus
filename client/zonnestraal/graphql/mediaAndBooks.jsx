import { gql } from "@apollo/client";

export const GET_MEDIA_AND_BOOKS_QUERY = gql`
 query {
  getAllLibraries {
    id
    serial
  	title
  	description
  	publisher
  	author
  	year
  }
  getAllMedia {
    id
    title
    description
  }  
 }
`;