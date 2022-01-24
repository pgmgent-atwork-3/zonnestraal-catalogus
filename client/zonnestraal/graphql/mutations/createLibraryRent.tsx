import { gql } from "@apollo/client";

export const CREATE_LIBRARY_RENT_MUTATION = gql`
mutation createLibraryRent($createLibraryRentInput: CreateLibraryRentInput!){
  createLibraryRent(createLibraryRentInput: $createLibraryRentInput){
    name
    library_id
    profile_id
  }
}
`;