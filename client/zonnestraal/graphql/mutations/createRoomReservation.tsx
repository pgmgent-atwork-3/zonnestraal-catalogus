import { gql } from "@apollo/client";

export const CREATE_ROOM_RESERVATION = gql`
mutation {
  createRoomReservation(createBuildingsRoomsReservationInput: {
    building_room_id: 1
    name: "Tim De Saeger"
    from_date: "2022-01-27 16:43:40"
    till_date: "2022-01-28 16:43:40"
  }
  ){
    name
    building_room_id
    profile_id
  }
}
`