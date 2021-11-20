import React from 'react';

const initialState = {
  counter: 0
}
export const ACTIONS = {
  ADD: 'add'
}
function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return { ...state, counter: state.counter + 1 }
    default:
      return state;
  }
} 
export function useCounter() {
  const [state, dispatch] = React.useReducer(counterReducer, initialState);
  return {
    state,
    dispatch
  }
}