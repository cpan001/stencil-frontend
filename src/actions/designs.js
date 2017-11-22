export function fetchDesigns() {
  return dispatch => {
    dispatch({ type: "START_FETCHING_DESIGNS_REQUEST" });
    return fetch("http://localhost:3000/api/v1/designs")
      .then(resp => resp.json())
      .then(designs => {
        dispatch({ type: "FETCH_DESIGNS", payload: designs });
      });
  };
}
