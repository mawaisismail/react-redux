import { ActionName, IActionType, IInitialState } from "./action";

const initialState: IInitialState = {
  number: 0,
  baseUser: {
    name: "Awais",
    age: 10,
  },
};

function reducer(state = initialState, action: IActionType) {
  const { type, payload } = action;
  const { ADD_ONE, MINUS_ONE, DELETE_ALL, CHANGE_AGE } = ActionName;
  switch (type) {
    case ADD_ONE:
      return {
        ...state,
        number: state.number + payload,
      };
    case MINUS_ONE:
      return {
        ...state,
        number: state.number - payload,
      };
    case DELETE_ALL:
      return { ...state, number: 0 };
    case CHANGE_AGE:
      return { ...state, baseUser: { ...state.baseUser, age: payload } };
    default:
      return state;
  }
}

export default reducer;
