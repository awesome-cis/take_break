export interface ICalculatorState {
  number: number;
}

// Describing the different ACTION NAMES available
export const INCREASE_NUMBER = 'INCREASE_NUMBER';
export const DECREASE_NUMBER = 'DECREASE_NUMBER';

export interface IIncreaseNumberAction {
  type: typeof INCREASE_NUMBER;
  payload: {
    number: number;
  };
}

export interface IDecreaseNumberAction {
  type: typeof DECREASE_NUMBER;
  payload: {
    number: number;
  };
}

export type calculatorActionTypes =
  | IIncreaseNumberAction
  | IDecreaseNumberAction;
