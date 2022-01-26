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

