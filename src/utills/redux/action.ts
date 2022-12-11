export enum ActionName {
  ADD_ONE = "ADD_ONE",
  MINUS_ONE = "MINUS_ONE",
  DELETE_ALL = "DELETE_ALL",
}

export interface IActionType {
  type: ActionName;
  payload: number;
}

export interface IInitialState {
  number: number;
}

interface IAddNumber {
  action: ActionName.ADD_ONE;
  payload: number;
}

export const addNumber = (value: number): IActionType => {
  return {
    payload: value,
    type: ActionName.ADD_ONE,
  };
};
export const minusNumber = (value: number): IActionType => {
  return {
    payload: value,
    type: ActionName.MINUS_ONE,
  };
};

export const resetAll = (): IActionType => {
  return {
    payload: 0,
    type: ActionName.DELETE_ALL,
  };
};
