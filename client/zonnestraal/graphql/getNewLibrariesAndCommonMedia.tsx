import { gql } from "@apollo/client";

export const GET_NEW_LIBRARIES_AND_MOST_COMMON_MEDIA = gql`
  query {
    getNewLibraries {
     id
     serial
     title
     description
     publisher
     author
     year
     location {
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
     type {
       id
       title
     }
     language
     meta_id
     rent {
      id
      name
      rent_from
      rent_till
      returned
     }
   }
   getMostCommonlyMedia {
    id
    title
    description
    type
    total
  }
 }
`