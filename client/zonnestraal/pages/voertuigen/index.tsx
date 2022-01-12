import client from "../../lib/apollo-client";
import React from "react";
import {GET_ALL_CARS_QUERY} from "../../graphql/getAllCars";
import TestData from "../../components/TestData";
import { GetAllCars } from "../../interfaces/api/getAllCars";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_CARS_QUERY,
  });

  return {
    props: {
      cars: data.getAllCars
    },
 };
}

function CarPage({ cars } : {cars: GetAllCars}) {
  //console.log(cars)
  return (
    <>
      <h1>Pick a car</h1>
    </>
  )
}

export default CarPage;