function projects(state = { isFetching: false, projects: [] }, action) {
  switch (action.type) {
    case "START_FETCHING_PROJECTS_REQUEST":
      return Object.assign({}, state, { isFetching: true });
    case "FETCH_PROJECTS":
      return Object.assign(
        {},
        state,
        { isFetching: false },
        { projects: [...action.payload, ...state.projects] }
      );
    default:
      return state;
  }
}

export default projects;
