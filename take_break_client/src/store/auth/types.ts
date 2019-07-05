import { SET_ACCESS_TOKEN } from './actionTypes';

export type AccessTokenType = string | null;

export type AuthStoreState = {
  accessToken: AccessTokenType;
};

export type SetAccessTokenActionPayload = {
  accessToken: AccessTokenType;
};
export type SetAccessTokenAction = {
  type: typeof SET_ACCESS_TOKEN;
  payload: SetAccessTokenActionPayload;
};
