import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useState } from "react";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
    headers: {
    authorization: `Bearer  `
  }
});

export default client;