import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation (
    $email: string!
    $password: string!
  ){
    login(
      email: $email
      password: $password) {
        id
        access_token,
    }
  }
`;