const initialState = {
  counter: 0,
  result: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case 'SUB':
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case 'STORE_RESULT':
      const updatedResult = [...state.result];
      updatedResult.push(action.value);
      return {
        ...state,
        result: updatedResult,
      };
    case 'DELETE_RESULT':
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
