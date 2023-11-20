import { gql } from "@apollo/client";

export const GET_PROJECTS_LIST = gql`
  query Projects {
    projects(pagination: { limit: 100 }, sort: "createdAt:desc") {
      data {
        id
        attributes {
          category
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
          photos(pagination: { limit: 100 }) {
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
