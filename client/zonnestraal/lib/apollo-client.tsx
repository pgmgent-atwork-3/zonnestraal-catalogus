import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://zonnenstraal-server.onrender.com/graphql",
    cache: new InMemoryCache(),
    headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tAZ21haWwuY29tIiwic3ViIjo2NSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjQxOTc4NzQ2LCJleHAiOjE2NDIwMjE5NDZ9.xeQ_mQjj32wF9bSUX3xNnwB0yv9yZo84Q1YMx11YIK4`
  }
});

export default client;