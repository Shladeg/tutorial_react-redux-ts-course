interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS_START = "FETCH_USERS_START",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersStartAction {
  type: UserActionTypes.FETCH_USERS_START;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersStartAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
