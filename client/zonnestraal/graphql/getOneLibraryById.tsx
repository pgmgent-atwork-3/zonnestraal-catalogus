import { gql } from "@apollo/client";

export const GET_ONE_LIBRARY = gql `
query getLibraryById ($id: Int!){
  getLibraryById(id: $id){
   serial
   title
   description
   publisher
   author
   year
   created_on
   edited_on
   hidden
   language
   type {
     id
     title
   }
   location {
     id
     title
     street
     number
     zip
     city
     country
     lat
     lng
   }
   rent {
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
 } 
}
`