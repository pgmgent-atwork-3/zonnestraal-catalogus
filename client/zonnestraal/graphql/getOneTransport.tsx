import { gql } from "@apollo/client";

export const GET_ONE_TRANSPORT = gql`
    query getOneTransport ( $id: Int! ){
      getOneTransportById(id: $id){
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
        id
        from_date
        till_date
        profile {
          id
          display_name
        }
        name
        created_on
        edited_on
      }  
      fixedReservation {
        id
        name
        profile{
          id
          display_name
        }
        from_date
        till_date
        start_time
        end_time
        frequency
        created_on
        excepions {
          id
          date
          created_on
        } 
      }  
    }
  }
`