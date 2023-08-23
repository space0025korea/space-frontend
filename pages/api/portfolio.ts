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
          location
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
