export interface ICalculatorState {
  number: number;
}

// Describing the different ACTION NAMES available
export const INCREASE_NUMBER = 'INCREASE_NUMBER';
export const DECREASE_NUMBER = 'DECREASE_NUMBER';

export interface IIncreaseNumberActionPayload {
  number: number;
}
export interface IIncreaseNumberAction {
  type: typeof INCREASE_NUMBER;
  payload: IIncreaseNumberActionPayload;
}

export interface IDecreaseNumberActionPayload {
  number: number;
}
export interface IDecreaseNumberAction {
  type: typeof DECREASE_NUMBER;
  payload: IDecreaseNumberActionPayload;
}

export type calculatorActionTypes =
  | IIncreaseNumberAction
  | IDecreaseNumberAction;
