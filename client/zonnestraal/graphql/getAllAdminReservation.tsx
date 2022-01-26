import { gql } from "@apollo/client";

export const GET_ALL_ADMIN_RESERVATION = gql`
query {
  getAllLibraryReservationForAdmin{
   id
   library_id
   profile_id
   name
   deleted
   created_on
   library{
     id
     title
     
   }
   profile {
     id
     display_name
   }
 } getAllMediaRentForAdmin{
  id
  media_id
  profile_id
  name
  returned
  rent_from
  rent_till
  media{
    id
    title
    
  }
  profile {
    id
    display_name
  }
 } getAllTransportReservationForAdmin{
  id
  transport_id
  profile_id
  name
  from_date
  till_date
  created_on
  edited_on
  transport {
    id
    title
    brand
    type
  }
  profile {
    id
    display_name
  }
 } getAllRoomsReservationForAdmin {
  id
  building_room_id
  profile_id
  name
  from_date
  till_date
  created_on
  edited_on
  room {
    id
    title
  }
  profile {
    id
    display_name
  }
 }
}
`