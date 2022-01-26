import { gql } from "@apollo/client";

export const GET_ONE_MEDIA = gql `
query getOneMediaById ( $id: Int! ){
  getMediaById(id: $id){
   title
   description
   created_on
   edited_on
   hidden
   show_home
   language
   type {
     id
     title
     created_on
     edited_on
     language 
   }
   rent {
     id
     name
     rent_from
     rent_till
     returned
   }
   fixedReservation {
     id
     name
     from_date
     till_date
     start_time
     end_time
     frequency
     created_on
     excepions {
       id
       date
       created_on
     }
     
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
     created_on
     edited_on
     show_overview
     
   }
 }
 }
`