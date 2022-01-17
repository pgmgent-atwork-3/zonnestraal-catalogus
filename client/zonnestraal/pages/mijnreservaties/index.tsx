import React from 'react'
import { useQuery, gql } from '@apollo/client'
import DataTableOwn from '../../components/Table/DataTableMedia';
import styled from 'styled-components';
import DataTableMedia from '../../components/Table/DataTableMedia';
import DataTableBooks from '../../components/Table/DataTableBooks';

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

const GET_ALL_OWN_RESERVATION = gql`
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
}
}
`

const index = (props: Props) => {
  const { loading, error, data } = useQuery(GET_ALL_OWN_RESERVATION)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)
  console.log(data.GetAllLibraryReservationByUser)

  return (
    <ContentContainer>
      <h2>Overzicht van mijn reservaties</h2>

      <div>
        <Title>Media</Title>
        <DataTableMedia data={data.GetAllMediaRentByUser} />  
      </div>

      <div>
        <Title>Boeken</Title>
        <DataTableBooks data={data.GetAllLibraryReservationByUser} />  
      </div>

      <div>
        <Title>Voertuigen</Title>
        <DataTableMedia data={data.GetAlltransportReservationsByUser} />  
      </div>

    </ContentContainer>
  )
}

export default index
