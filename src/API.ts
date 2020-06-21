/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSessionInput = {
  id?: string | null,
  createdAt?: string | null,
  joined: number,
  host: UserInput,
  guest?: UserInput | null,
  version: number,
  events?: Array< string > | null,
};

export type UserInput = {
  id: string,
  name?: string | null,
};

export type ModelSessionConditionInput = {
  version?: ModelIntInput | null,
  events?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateSessionInput = {
  id: string,
  createdAt: string,
  joined: number,
  host?: UserInput | null,
  guest?: UserInput | null,
  version?: number | null,
  events?: Array< string > | null,
};

export type DeleteSessionInput = {
  id: string,
  createdAt: string,
  joined: number,
};

export type ModelSessionPrimaryCompositeKeyConditionInput = {
  eq?: ModelSessionPrimaryCompositeKeyInput | null,
  le?: ModelSessionPrimaryCompositeKeyInput | null,
  lt?: ModelSessionPrimaryCompositeKeyInput | null,
  ge?: ModelSessionPrimaryCompositeKeyInput | null,
  gt?: ModelSessionPrimaryCompositeKeyInput | null,
  between?: Array< ModelSessionPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelSessionPrimaryCompositeKeyInput | null,
};

export type ModelSessionPrimaryCompositeKeyInput = {
  createdAt?: string | null,
  joined?: number | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  joined?: ModelIntInput | null,
  version?: ModelIntInput | null,
  events?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession:  {
    __typename: "Session",
    id: string,
    createdAt: string,
    joined: number,
    host:  {
      __typename: "User",
      id: string,
      name: string | null,
    },
    guest:  {
      __typename: "User",
      id: string,
      name: string | null,
    } | null,
    version: number,
    events: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession:  {
    __typename: "Session",
    id: string,
    createdAt: string,
    joined: number,
    host:  {
      __typename: "User",
      id: string,
      name: string | null,
    },
    guest:  {
      __typename: "User",
      id: string,
      name: string | null,
    } | null,
    version: number,
    events: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession:  {
    __typename: "Session",
    id: string,
    createdAt: string,
    joined: number,
    host:  {
      __typename: "User",
      id: string,
      name: string | null,
    },
    guest:  {
      __typename: "User",
      id: string,
      name: string | null,
    } | null,
    version: number,
    events: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
  createdAt: string,
  joined: number,
};

export type GetSessionQuery = {
  getSession:  {
    __typename: "Session",
    id: string,
    createdAt: string,
    joined: number,
    host:  {
      __typename: "User",
      id: string,
      name: string | null,
    },
    guest:  {
      __typename: "User",
      id: string,
      name: string | null,
    } | null,
    version: number,
    events: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type ListSessionsQueryVariables = {
  id?: string | null,
  createdAtJoined?: ModelSessionPrimaryCompositeKeyConditionInput | null,
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSessionsQuery = {
  listSessions:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      createdAt: string,
      joined: number,
      host:  {
        __typename: "User",
        id: string,
        name: string | null,
      },
      guest:  {
        __typename: "User",
        id: string,
        name: string | null,
      } | null,
      version: number,
      events: Array< string > | null,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnUpdateSessionSubscriptionSubscriptionVariables = {
  id: string,
};

export type OnUpdateSessionSubscriptionSubscription = {
  onUpdateSessionSubscription:  {
    __typename: "Session",
    id: string,
    createdAt: string,
    joined: number,
    host:  {
      __typename: "User",
      id: string,
      name: string | null,
    },
    guest:  {
      __typename: "User",
      id: string,
      name: string | null,
    } | null,
    version: number,
    events: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession:  {
    __typename: "Session",
    id: string,
    createdAt: string,
    joined: number,
    host:  {
      __typename: "User",
      id: string,
      name: string | null,
    },
    guest:  {
      __typename: "User",
      id: string,
      name: string | null,
    } | null,
    version: number,
    events: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession:  {
    __typename: "Session",
    id: string,
    createdAt: string,
    joined: number,
    host:  {
      __typename: "User",
      id: string,
      name: string | null,
    },
    guest:  {
      __typename: "User",
      id: string,
      name: string | null,
    } | null,
    version: number,
    events: Array< string > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession:  {
    __typename: "Session",
    id: string,
    createdAt: string,
    joined: number,
    host:  {
      __typename: "User",
      id: string,
      name: string | null,
    },
    guest:  {
      __typename: "User",
      id: string,
      name: string | null,
    } | null,
    version: number,
    events: Array< string > | null,
    updatedAt: string,
  } | null,
};
