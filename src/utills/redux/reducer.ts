import { ActionName, IActionType, IInitialState } from "./action";

const initialState: IInitialState = {
  number: 0,
};

function reducer(state = initialState, action: IActionType) {
  const { type, payload } = action;
  const { ADD_ONE, MINUS_ONE, DELETE_ALL } = ActionName;
  switch (type) {
    case ADD_ONE:
      return {
        number: state.number + payload,
      };
    case MINUS_ONE:
      return {
        number: state.number - payload,
      };
    case DELETE_ALL:
      return { number: 0 };
    default:
      return state;
  }
}

export default reducer;
