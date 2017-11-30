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
    case "ADD_MEMBER":
      let nProjects = { ...state.projects };
      let project = nProjects[action.payload.projectId];
      let find = project["jointusers"].find(
        u => u.id === parseInt(action.payload.member.id, 10)
      );
      if (!find) {
        project["jointusers"] = [
          ...project["jointusers"],
          action.payload.member
        ];
      }
      return Object.assign({}, state, { projects: nProjects });
    case "REMOVE_MEMBER":
      let newProjects = { ...state.projects };
      let nProject = newProjects[action.payload.projectId];
      nProject["jointusers"] = nProject["jointusers"].filter(
        u => u.id !== parseInt(action.payload.memberId, 10)
      );
      return Object.assign({}, state, { projects: newProjects });
    default:
      return state;
  }
}

export default projects;
