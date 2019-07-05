import { AuthStoreState, SetAccessTokenActionPayload } from './types';
import { SET_ACCESS_TOKEN } from './actionTypes';
import { handleActions, Action } from 'redux-actions';

const initialState: AuthStoreState = {
  accessToken: null
};

export const authReducer = handleActions<AuthStoreState>(
  {
    [SET_ACCESS_TOKEN]: (
      state,
      action: Action<SetAccessTokenActionPayload>
    ): AuthStoreState => {
      return { ...state, accessToken: action.payload.accessToken };
    }
  },
  initialState
);
