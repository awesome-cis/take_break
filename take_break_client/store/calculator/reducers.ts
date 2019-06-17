import {
  ICalculatorState,
  calculatorActionTypes,
  INCREASE_NUMBER,
  DECREASE_NUMBER
} from './types';

const initialState: ICalculatorState = {
  number: 0
};

export const calculatorReducer = (
  state = initialState,
  action: calculatorActionTypes
): ICalculatorState => {
  switch (action.type) {
    case INCREASE_NUMBER:
      return {
        number: state.number + action.payload.number
      };
    case DECREASE_NUMBER:
      return {
        number: state.number - action.payload.number
      };
    default:
      return state;
  }
};
