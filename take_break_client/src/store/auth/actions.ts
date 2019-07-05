import { SetAccessTokenActionPayload } from './types';
import { SET_ACCESS_TOKEN } from './actionTypes';
import { createAction } from 'redux-actions';

export const actionCreators = {
  setAccessToken: createAction<SetAccessTokenActionPayload>(SET_ACCESS_TOKEN)
};
