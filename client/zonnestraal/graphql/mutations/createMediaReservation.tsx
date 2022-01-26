import { gql } from "@apollo/client";

export const CREATE_MEDIA_RESERVATION_MUTATION = gql`
mutation createMediaRent($createMediaRentInput: CreateMediaRentInput!){
  createMediaRent(createMediaRentInput: $createMediaRentInput){
    name
    media_id
    profile_id
  }
}
` ;
