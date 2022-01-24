import { gql } from "@apollo/client";

export const GET_ONE_ROOM = gql`
    query getOneBuildingsRoom ( $id: Int! ){
      getOneBuildingsRoomById(id: $id){
        title
        color_calendar
        building {
          id
          title
        } 
        roomReservation {
          from_date
          till_date
          profile {
            id
          }
          name
          created_on
          edited_on
          
        }  
        fixedReservation {
          name
          profile_id
          from_date
          till_date
          start_time
          end_time
          frequency
          created_on
          excepions {
            date
            created_on
          }
        }  
    }
  }
`