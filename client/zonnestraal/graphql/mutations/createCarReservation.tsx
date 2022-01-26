import { gql } from "@apollo/client";

export const CREATE_CAR_RESERVATION = gql`
mutation createCarReservation($createTransportReservationInput: CreateTransportReservationInput!){
  createCarReservation(createTransportReservationInput: $createTransportReservationInput){
    id
    name
    transport_id
    created_on
    profile_id
  }
}
`;