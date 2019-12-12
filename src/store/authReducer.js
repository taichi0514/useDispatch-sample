import { createStore } from "redux";
export const AUTH_TRUE = "AUTH_TRUE";
export const AUTH_FALSE = "AUTH_FALSE";

export const reducer = (state = { count: 1 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
