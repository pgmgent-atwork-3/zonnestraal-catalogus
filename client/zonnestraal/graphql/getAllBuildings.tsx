import { gql } from "@apollo/client";

export const GET_ALLL_BUILDINGS = gql`
query {
  getAllbuildings {
  id
  language
  title
  street
  number
  zip
  city
  country
  meta_id
  created_on
  edited_on
  }
  }
`;