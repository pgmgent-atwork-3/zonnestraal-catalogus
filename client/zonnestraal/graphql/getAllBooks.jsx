import { gql } from "@apollo/client";

export const GET_ALLL_BOOKS_QUERY = gql`
 query {
  getAllLibraries {
    id
    serial
  	title
  	description
  	publisher
  	author
  	year
  	location{
      id
      title
      street
      number
      zip
      city
      country
    }
  	created_on
  	edited_on
  	hidden
  	type{
      id
      title
    }
  rent {
    id
    name
    rent_from
    rent_till
    returned
  }
  reservation {
    id
    name
    deleted
    created_on
  }
  	language
  	meta_id
  }
 }
`;