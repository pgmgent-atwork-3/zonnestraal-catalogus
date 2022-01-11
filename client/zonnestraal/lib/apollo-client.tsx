import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://zonnenstraal-server.onrender.com/graphql",
    cache: new InMemoryCache(),
    headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tAZ21haWwuY29tIiwic3ViIjo2NSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjQxOTI0MzY4LCJleHAiOjE2NDE5Njc1Njh9.THiDCgQK2jU2SfgMVB0RgPikHPmeYPIX2ynncciSZDE`
  }
});

export default client;