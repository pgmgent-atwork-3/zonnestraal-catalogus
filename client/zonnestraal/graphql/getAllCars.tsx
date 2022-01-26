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

