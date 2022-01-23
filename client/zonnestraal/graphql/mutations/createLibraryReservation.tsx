import { gql } from "@apollo/client";


export const CREATE_LIBRARY_RESERVATION_MUTATION = gql`
mutation createLibraryReservation($createLibraryReservationInput: CreateLibraryReservationInput!) {
  createLibraryReservation(createLibraryReservationInput: $createLibraryReservationInput) {
    name
    library_id
    created_on
    profile_id
  }
}
`;

/* export const CREATE_LIBRARY_RESERVATION_MUTATION = gql`
mutation createLibraryReservation($library_id: Int!, $name: String!, $from_date: String!, $till_date: String!) {
  createLibraryReservation(createLibraryReservationInput: {
    library_id: $library_id
    name: $name},
    createLibraryReservationDateInput:{
      from_date: $from_date
      till_date: $till_date
    }) {
    name
    library_id
    created_on
    profile_id
  }
  }
`  */

/* export const CREATE_LIBRARY_RESERVATION_MUTATION = gql`
mutation {
  createLibraryReservation(createLibraryReservationInput: {
    library_id: 90
    name: "Tim De Saeger"},
    createLibraryReservationDateInput:{
      from_date: "2022-01-16 16:43:40"
      till_date: "2022-01-16 16:43:40"
    }) {
    name
    library_id
    created_on
    profile_id
  }
  }
`  */
