import client from "../../lib/apollo-client";
import React from "react";
import {CARS_QUERY} from "../../graphql/cars";
//import { GetAllCars } from "../../interfaces/api/getAllCars";
import TestData from "../../components/TestData";
import { GetAllCars } from "../../interfaces/api/getAllCars";

export async function getStaticProps() {
  const { data } = await client.query({
    query: CARS_QUERY,
  });

  return {
    props: {
      cars: data.getAllCars
    },
 };
}

function CarPage({ cars } : {cars: GetAllCars}) {
  return (
    <>
      <h1>Pick a car</h1>
      <TestData data={cars} />
    </>
  )
}

export default CarPage;