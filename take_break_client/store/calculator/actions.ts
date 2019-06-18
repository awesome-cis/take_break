import {
  INCREASE_NUMBER,
  DECREASE_NUMBER,
  IIncreaseNumberAction,
  IDecreaseNumberAction
} from './types';

export const increaseNumber = (number: number): IIncreaseNumberAction => {
  return {
    type: INCREASE_NUMBER,
    payload: {
      number
    }
  };
};

export const decreaseNumber = (number: number): IDecreaseNumberAction => {
  return {
    type: DECREASE_NUMBER,
    payload: {
      number
    }
  };
};
