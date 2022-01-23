import { gql } from "@apollo/client";

export const CREATE_MEDIA_RESERVATION_MUTATION = gql`
mutation {
  createMediaRent(createMediaRentInput: {
    media_id: 7
    name: "Tim DS"
    rent_from: "2022-01-016 16:43:22"
    rent_till: "2022-01-23 16:43:22"
  }
  
  ){
    name
    media_id
    profile_id
  }
  }
` 
