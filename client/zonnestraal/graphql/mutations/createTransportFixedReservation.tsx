import { gql } from "@apollo/client";

export const CREATE_TRANSPORT_FIXED_RESERVATION = gql`
  mutation createTransportFixedReservation($createTransportFixedReservationInput: CreateTransportFixedReservationInput!){
    createTransportFixedReservation(createTransportFixedReservationInput: $createTransportFixedReservationInput){
      name
      transport_id
      created_on
      profile_id
    }
  }  
`