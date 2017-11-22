function designs(state = { isFetching: false, designs: [] }, action) {
  switch (action.type) {
    case "START_FETCHING_DESIGNS_REQUEST":
      return Object.assign({}, state, { isFetching: true });
    case "FETCH_DESIGNS":
      return Object.assign(
        {},
        state,
        { isFetching: false },
        { designs: [...action.payload, ...state.designs] }
      );
    case "ADD_DESIGN":
      return Object.assign(
        {},
        state,
        { isFetching: false },
        { designs: [action.payload, ...state.designs] }
      );
    default:
      return state;
  }
}

export default designs;
