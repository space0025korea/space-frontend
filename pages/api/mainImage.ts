import { gql } from "@apollo/client";

export const GET_MAIN_IMAGE = gql`
  query MainImage {
    mainImage {
      data {
        id
        attributes {
          image {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
