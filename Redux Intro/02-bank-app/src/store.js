import { createStore } from "redux";

const initialState = {
  totalAmount: 2500701,
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "withdraw": {
      return {
        ...state,
        totalAmount: state.totalAmount - action.amount,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
