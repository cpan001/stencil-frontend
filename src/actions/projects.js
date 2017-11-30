export function fetchProjects(userId) {
  return dispatch => {
    dispatch({ type: "START_FETCHING_PROJECTS_REQUEST" });
    return fetch(`http://localhost:3000/api/v1/users/${userId}/projects`)
      .then(resp => resp.json())
      .then(projects => {
        console.log(projects, "hit actions");
        dispatch({ type: "FETCHED_PROJECTS", payload: projects });
      });
  };
}

export function fetchProject(projectId) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/projects/${projectId}`)
      .then(resp => resp.json())
      .then(project => {
        dispatch({ type: "FETCHED_PROJECT", payload: project });
      });
  };
}
