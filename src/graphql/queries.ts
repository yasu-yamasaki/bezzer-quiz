/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      createdAt
      host {
        id
        name
      }
      guest {
        id
        name
      }
      quiz {
        content
        answer
      }
      updatedAt
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        host {
          id
          name
        }
        guest {
          id
          name
        }
        quiz {
          content
          answer
        }
        updatedAt
      }
      nextToken
    }
  }
`;
