import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_ALLL_BUILDINGS_ROOMS } from '../../graphql/getAllBuildingsRooms'
import { GET_ALL_CARS_QUERY } from '../../graphql/getAllCars';
import { GET_ALLL_BOOKS_QUERY } from '../../graphql/getAllBooks';
import { useAuth } from '../../lib/auth';

interface Props {
  
}

const BuildingsPage = (props: Props) => {
  const { loading, error, data } = useQuery(GET_ALLL_BUILDINGS_ROOMS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)

  return (
    <>
      <div>
        <ul>
          {data?.getAllbuildingsRooms.map((v) => {
            return <li key={v.title}>{v.title}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default BuildingsPage;

