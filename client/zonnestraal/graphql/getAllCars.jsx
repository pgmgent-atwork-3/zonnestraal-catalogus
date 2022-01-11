import { gql } from "@apollo/client";

export const GET_ALL_CARS_QUERY = gql`
query {
	getAllCars{
    id
    title
    brand
    type
    number
    color
    color_calendar
    remarks
  }
}
`;

/* export const GET_ALL_CARS_QUERY = gql`
query {
	getAllCars{
    id
    title
    brand
    type
    number
    color
    color_calendar
    remarks
    created_on
    edited_on
    reservation {
      from_date
      till_date
      name
    }
    fixedReservation {
      name
      from_date
      till_date
      start_time
      end_time
      frequency
      created_on
    }
  }
}
`; */