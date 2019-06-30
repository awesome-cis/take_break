import {
  ICalculatorState,
  INCREASE_NUMBER,
  IIncreaseNumberActionPayload,
  DECREASE_NUMBER,
  IDecreaseNumberActionPayload
} from './types';
import { handleActions, Action } from 'redux-actions';

const initialState: ICalculatorState = {
  number: 0
};

export const calculatorReducer = handleActions<ICalculatorState>(
  {
    [INCREASE_NUMBER]: (
      state,
      action: Action<IIncreaseNumberActionPayload>
    ): ICalculatorState => {
      return { ...state, number: state.number + action.payload.number };
    },
    [DECREASE_NUMBER]: (
      state,
      action: Action<IDecreaseNumberActionPayload>
    ): ICalculatorState => {
      return { ...state, number: state.number - action.payload.number };
    }
  },
  initialState
);
