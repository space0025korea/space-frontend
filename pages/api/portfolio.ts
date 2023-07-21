import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query Projects {
    projects {
      data {
        id
        attributes {
          description
          title
          area
          category
          location
          publishedAt
          photos {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          drawing {
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
