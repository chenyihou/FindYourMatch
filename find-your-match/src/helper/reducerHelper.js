export const makeUnionReducer = (initState, reducers) => (
  state = initState,
  action
) => {
  if (reducers[action.type])
    return { ...state, ...reducers[action.type](action.payload) };
  return state;
};
