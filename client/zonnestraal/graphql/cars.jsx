import { gql } from "@apollo/client";

export const CARS_QUERY = gql`
query CarsPage {
  getAllCars {
    id
    title
    brand
    number
    color
    color_calendar
    remarks
    language
    hidden
    meta_id
    created_on  
  }
}
`;