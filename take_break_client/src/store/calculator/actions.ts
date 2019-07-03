import {
  INCREASE_NUMBER,
  DECREASE_NUMBER,
  IDecreaseNumberActionPayload,
  IIncreaseNumberActionPayload
} from './types';
import { createAction } from 'redux-actions';

export const actionCreators = {
  increaseNumber: createAction<IIncreaseNumberActionPayload>(INCREASE_NUMBER),
  decreaseNumber: createAction<IDecreaseNumberActionPayload>(DECREASE_NUMBER)
};
