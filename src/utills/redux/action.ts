export enum ActionName {
  ADD_ONE = "ADD_ONE",
  MINUS_ONE = "MINUS_ONE",
  DELETE_ALL = "DELETE_ALL",
  CHANGE_AGE = "CHANGE_AGE",
}

export interface IActionType {
  type: ActionName;
  payload: number;
}

export interface IInitialState {
  number: number;
  baseUser: {
    name: string;
    age: number;
  };
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
export const changeAge = (age: number): IActionType => {
  return {
    payload: age,
    type: ActionName.CHANGE_AGE,
  };
};
