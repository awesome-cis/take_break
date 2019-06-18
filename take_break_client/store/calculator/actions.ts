import {
  INCREASE_NUMBER,
  DECREASE_NUMBER,
  IDecreaseNumberActionPayload,
  IIncreaseNumberActionPayload
} from './types';
import { createAction } from 'redux-actions';

export const increaseNumber = createAction<IIncreaseNumberActionPayload>(
  INCREASE_NUMBER
);
export const decreaseNumber = createAction<IDecreaseNumberActionPayload>(
  DECREASE_NUMBER
);
