export function fetchProjects(userId) {
  return dispatch => {
    dispatch({ type: "START_FETCHING_PROJECTS_REQUEST" });
    return fetch(`http://localhost:3000/api/v1/users/${userId}/projects`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
    })
      .then(resp => resp.json())
      .then(projects => {
        dispatch({ type: "FETCHED_PROJECTS", payload: projects });
      });
  };
}

export function fetchProject(projectId) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/projects/${projectId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
    })
      .then(resp => resp.json())
      .then(project => {
        dispatch({ type: "FETCHED_PROJECT", payload: project });
      });
  };
}

export function addMember(member, projectId) {
  return { type: "ADD_MEMBER", payload: { member, projectId } };
}

export function removeMember(memberId, projectId) {
  return { type: "REMOVE_MEMBER", payload: { memberId, projectId } };
}
