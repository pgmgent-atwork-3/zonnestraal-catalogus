import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://zonnenstraal-server.onrender.com/graphql",
    cache: new InMemoryCache(),
    headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tAZ21haWwuY29tIiwic3ViIjo2NSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjQxNTA5MDAxLCJleHAiOjE2NDE1NTIyMDF9.woVzC6f0-gl08ooLAYS7sFl0U86G6Fu26AIofyMIFXs`
  }
});

export default client;