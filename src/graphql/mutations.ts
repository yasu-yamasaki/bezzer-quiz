/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
