import React from 'react'
import { Car } from '../interfaces/models/car';


const TestData = ({ data }) => {
  console.log(data)

  return (
    <div>
      {data.map(c => {
        return (
          <h3>{c.title}</h3>
        )
      })}
    </div>
  )
}

export default TestData
