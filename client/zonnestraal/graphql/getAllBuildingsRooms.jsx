import { gql } from "@apollo/client";

export const GET_ALLL_BUILDINGS_ROOMS = gql`
query {
  getAllbuildingsRooms {
    id
    title
    color_calendar
    building {
      id
      title
    }
  }
}
`;