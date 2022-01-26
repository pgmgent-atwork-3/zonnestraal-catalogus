import { gql } from "@apollo/client";

export const GET_ALL_FIXED_RESERVATIONS_ADMIN = gql`
  query {
    getAllMediaFixedReservationForAdmin {
    id
    name
    from_date
    till_date
    start_time
    end_time
    frequency
    created_on
    media{
        id
        title
    }
    profile {
      id
      display_name
    }
  } getAllRoomsFixedReservationForAdmin{
    id
    name
    from_date
    till_date
    start_time
    frequency
    end_time
    created_on
    room {
      id
      title
    }
    profile {
      id
      display_name
    }
  } getAllCarsFixedReservationForAdmin{
    id
    name
    from_date
    till_date
    start_time
    end_time
    frequency
    created_on
    transport {
      id
      title
      brand
    }
    profile {
      id
      display_name
    }
  }
  }
`