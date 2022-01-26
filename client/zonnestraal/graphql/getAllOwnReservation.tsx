import { gql } from "@apollo/client";

export const GET_ALL_OWN_RESERVATION = gql`
query {
  GetAllMediaRentByUser {
  id
  media_id
  profile_id
  name
  returned
  rent_till
  rent_from
  media{
    id
    title
  }
  profile {
    id
    display_name
  }
} GetAlltransportReservationsByUser{
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
} GetAllLibraryReservationByUser{
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
} GetAllRoomsReservationByUser{
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
      color_calendar
    }
  }
}
`