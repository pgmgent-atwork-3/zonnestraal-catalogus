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
    type{
      title
    }
  }
  getAllMedia {
    id
    title
    description
  }  
 }
`;