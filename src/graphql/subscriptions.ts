/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateSessionSubscription = /* GraphQL */ `
  subscription OnUpdateSessionSubscription($id: ID!) {
    onUpdateSessionSubscription(id: $id) {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
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
