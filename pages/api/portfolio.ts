import { gql } from "@apollo/client";

export const GET_PROJECTS_LIST = gql`
  query Projects {
    projects {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query ProjectById($id: ID!) {
    project(id: $id) {
      data {
        id
        attributes {
          description
          title
          area
          category
          location
          publishedAt
          drawing {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          photos {
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
