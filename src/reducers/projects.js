function projects(state = { isFetching: false, projects: null }, action) {
  switch (action.type) {
    case "START_FETCHING_PROJECTS_REQUEST":
      return Object.assign({}, state, { isFetching: true });
    case "FETCHED_PROJECTS":
      const projects = action.payload.reduce((acc, project) => {
        acc[project.id] = project;
        return acc;
      }, {});
      return Object.assign(
        {},
        state,
        { isFetching: false },
        { projects: projects }
      );
    case "FETCHED_PROJECT":
      let updatedProjects = { ...state.projects };
      updatedProjects[action.payload.id] = action.payload;
      return Object.assign({}, state, { projects: updatedProjects });
    default:
      return state;
  }
}

export default projects;
