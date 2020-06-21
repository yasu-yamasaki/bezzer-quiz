/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSessionInput = {
  id?: string | null,
  createdAt?: string | null,
  host: UserInput,
  guest?: UserInput | null,
  quiz?: QuizInput | null,
};

export type UserInput = {
  id: string,
  name?: string | null,
};

export type QuizInput = {
  content: string,
  answer?: Array<string> | null,
};

export type ModelSessionConditionInput = {
  createdAt?: ModelStringInput | null,
  and?: Array<ModelSessionConditionInput | null> | null,
  or?: Array<ModelSessionConditionInput | null> | null,
  not?: ModelSessionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array<number | null> | null,
};

export type UpdateSessionInput = {
  id: string,
  createdAt?: string | null,
  host?: UserInput | null,
  guest?: UserInput | null,
  quiz?: QuizInput | null,
};

export type DeleteSessionInput = {
  id?: string | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array<ModelSessionFilterInput | null> | null,
  or?: Array<ModelSessionFilterInput | null> | null,
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
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession: {
    __typename: 'Session',
    id: string,
    createdAt: string,
    host: {
      __typename: 'User',
      id: string,
      name: string | null,
    },
    guest: {
      __typename: 'User',
      id: string,
      name: string | null,
    } | null,
    quiz: {
      __typename: 'Quiz',
      content: string,
      answer: Array<string> | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession: {
    __typename: 'Session',
    id: string,
    createdAt: string,
    host: {
      __typename: 'User',
      id: string,
      name: string | null,
    },
    guest: {
      __typename: 'User',
      id: string,
      name: string | null,
    } | null,
    quiz: {
      __typename: 'Quiz',
      content: string,
      answer: Array<string> | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession: {
    __typename: 'Session',
    id: string,
    createdAt: string,
    host: {
      __typename: 'User',
      id: string,
      name: string | null,
    },
    guest: {
      __typename: 'User',
      id: string,
      name: string | null,
    } | null,
    quiz: {
      __typename: 'Quiz',
      content: string,
      answer: Array<string> | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession: {
    __typename: 'Session',
    id: string,
    createdAt: string,
    host: {
      __typename: 'User',
      id: string,
      name: string | null,
    },
    guest: {
      __typename: 'User',
      id: string,
      name: string | null,
    } | null,
    quiz: {
      __typename: 'Quiz',
      content: string,
      answer: Array<string> | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions: {
    __typename: 'ModelSessionConnection',
    items: Array<{
      __typename: 'Session',
      id: string,
      createdAt: string,
      host: {
        __typename: 'User',
        id: string,
        name: string | null,
      },
      guest: {
        __typename: 'User',
        id: string,
        name: string | null,
      } | null,
      quiz: {
        __typename: 'Quiz',
        content: string,
        answer: Array<string> | null,
      } | null,
      updatedAt: string,
    } | null> | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession: {
    __typename: 'Session',
    id: string,
    createdAt: string,
    host: {
      __typename: 'User',
      id: string,
      name: string | null,
    },
    guest: {
      __typename: 'User',
      id: string,
      name: string | null,
    } | null,
    quiz: {
      __typename: 'Quiz',
      content: string,
      answer: Array<string> | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession: {
    __typename: 'Session',
    id: string,
    createdAt: string,
    host: {
      __typename: 'User',
      id: string,
      name: string | null,
    },
    guest: {
      __typename: 'User',
      id: string,
      name: string | null,
    } | null,
    quiz: {
      __typename: 'Quiz',
      content: string,
      answer: Array<string> | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession: {
    __typename: 'Session',
    id: string,
    createdAt: string,
    host: {
      __typename: 'User',
      id: string,
      name: string | null,
    },
    guest: {
      __typename: 'User',
      id: string,
      name: string | null,
    } | null,
    quiz: {
      __typename: 'Quiz',
      content: string,
      answer: Array<string> | null,
    } | null,
    updatedAt: string,
  } | null,
};
