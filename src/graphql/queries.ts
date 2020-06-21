/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSession = /* GraphQL */ `
  query GetSession($id: ID!, $createdAt: AWSDateTime!, $joined: Int!) {
    getSession(id: $id, createdAt: $createdAt, joined: $joined) {
      id
      createdAt
      joined
      host {
        id
        name
      }
      guest {
        id
        name
      }
      version
      events
      updatedAt
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $id: ID
    $createdAtJoined: ModelSessionPrimaryCompositeKeyConditionInput
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSessions(
      id: $id
      createdAtJoined: $createdAtJoined
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        createdAt
        joined
        host {
          id
          name
        }
        guest {
          id
          name
        }
        version
        events
        updatedAt
      }
      nextToken
    }
  }
`;
