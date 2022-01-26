import React from 'react'
import { useQuery, gql } from '@apollo/client'
import DataTableOwn from '../../components/Table/DataTableMedia';
import styled from 'styled-components';
import DataTableBooks from '../../components/Table/DataTableBooks';
import DataTableCars from '../../components/Table/DataTableCars';
import DataTableRooms from '../../components/Table/DataTableRooms';
import {GET_ALL_ADMIN_RESERVATION} from '../../graphql/getAllAdminReservation';
import DataTableMediaFixed from '../../components/Table/DataTableMediaFixed';
import {GET_ALL_FIXED_RESERVATIONS_ADMIN} from '../../graphql/getAllFixedReservationsAdmin';
import DataTableRoomsFixed from '../../components/Table/DataTableRoomsFixed';
import DataTableCarsFixed from '../../components/Table/DataTableCarsFixed';
import { PrimaryButton } from '../../components/Buttons';
import Link from 'next/link';

interface Props {
  
}

const ContentContainer = styled.div`
  width: 85rem;
  max-width: 100%;
  padding: ${({ theme }) => theme.paddings.normal} ${({ theme }) => theme.paddings.normal};
  margin: 0 auto;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.extraLarge};

    button {
      width: 30%;
    }
  }
`

const Title = styled.h3`
  margin-top: ${({ theme }) => theme.margins.normal};
  margin-bottom: ${({ theme }) => theme.margins.small};
`


const AdminPage = (props: Props) => {
  const { loading, error, data } = useQuery(GET_ALL_FIXED_RESERVATIONS_ADMIN)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <ContentContainer>
      <h2>Overzicht vaste reservaties</h2>

      <Link href={'/reservatie/fixed'}>
        <PrimaryButton title='Vaste reservatie toevoegen'/>
      </Link>


      <div>
        <Title>Media</Title>
        <DataTableMediaFixed rowsData={data.getAllMediaFixedReservationForAdmin} />  
      </div> 

      <div>
        <Title>Zalen</Title>
        <DataTableRoomsFixed rowsData={data.getAllRoomsFixedReservationForAdmin} />  
      </div>

      <div>
        <Title>Voertuigen</Title>
        <DataTableCarsFixed rowsData={data.getAllCarsFixedReservationForAdmin} />  
      </div>

    </ContentContainer>
  )
}

export default AdminPage
