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
    rent {
      id
      name
      rent_from
      rent_till
      returned
    }
  }
  getAllMedia {
    id
    title
    description
    type{
      id
      title
      created_on
    }
  }  
 }
`;