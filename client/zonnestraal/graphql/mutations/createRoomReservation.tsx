import { gql } from "@apollo/client";

export const CREATE_ROOM_RESERVATION = gql`
mutation createRoomReservation($createBuildingsRoomsReservationInput: CreateBuildingsRoomsReservationInput!){
  createRoomReservation(createBuildingsRoomsReservationInput: $createBuildingsRoomsReservationInput) {
    name
    building_room_id
    profile_id
  }
}
`;