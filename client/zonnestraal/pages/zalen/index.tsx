import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_ALLL_BUILDINGS_ROOMS } from '../../graphql/getAllBuildingsRooms'
import { GET_ALL_CARS_QUERY } from '../../graphql/getAllCars';
import { GET_ALLL_BOOKS_QUERY } from '../../graphql/getAllBooks';
import { useAuth } from '../../lib/auth';

interface Props {
  
}

const BuildingsPage = (props: Props) => {
  const { loading, error, data } = useQuery(GET_ALL_CARS_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)

  return (
    <>
      <div>
        <ul>
          {data?.getAllCars.map((v) => {
            return <li key={v.title}>{v.title}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default BuildingsPage;

