export function fetchProjects() {
  return dispatch => {
    dispatch({ type: "START_FETCHING_PROJECTS_REQUEST" });
    return fetch("http://localhost:3000/api/v1/projects")
      .then(resp => resp.json())
      .then(projects => {
        console.log(projects, "hit actions");
        dispatch({ type: "FETCH_PROJECTS", payload: projects });
      });
  };
}
