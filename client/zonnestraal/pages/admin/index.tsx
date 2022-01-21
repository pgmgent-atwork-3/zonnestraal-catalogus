import React from 'react'
import { useQuery, gql } from '@apollo/client'
import DataTableOwn from '../../components/Table/DataTableMedia';
import styled from 'styled-components';
import DataTableMedia from '../../components/Table/DataTableMedia';
import DataTableBooks from '../../components/Table/DataTableBooks';
import DataTableCars from '../../components/Table/DataTableCars';
import DataTableRooms from '../../components/Table/DataTableRooms';

interface Props {
  
}

const ContentContainer = styled.div`
  width: 85rem;
  max-width: 100%;
  padding: ${({ theme }) => theme.paddings.normal} ${({ theme }) => theme.paddings.normal};
  margin: 0 auto;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.extraLarge};
  }
`

const Title = styled.h3`
  margin-top: ${({ theme }) => theme.margins.normal};
  margin-bottom: ${({ theme }) => theme.margins.small};
`

const GET_ALL_ADMIN_RESERVATION = gql`
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

const AdminPage = (props: Props) => {
  const { loading, error, data } = useQuery(GET_ALL_ADMIN_RESERVATION)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)
  console.log(data.getAllRoomsReservationForAdmin)

  return (
    <ContentContainer>
      <h2>Overzicht reservaties</h2>

      <div>
        <Title>Media</Title>
        <DataTableMedia data={data.getAllMediaRentForAdmin} />  
      </div>

      <div>
        <Title>Boeken</Title>
        <DataTableBooks rowsData={data.getAllLibraryReservationForAdmin} />  
      </div>

      <div>
        <Title>Zalen</Title>
        <DataTableRooms data={data.getAllRoomsReservationForAdmin} />  
      </div>

      <div>
        <Title>Voertuigen</Title>
        <DataTableCars data={data.getAllTransportReservationForAdmin} />  
      </div>

    </ContentContainer>
  )
}

export default AdminPage
