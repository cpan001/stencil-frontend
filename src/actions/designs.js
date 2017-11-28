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

export function addLike(userId, designId) {
  return { type: "ADD_LIKE", payload: { userId, designId } };
}
export function minusLike(userId, designId) {
  return { type: "MINUS_LIKE", payload: { userId, designId } };
}

export function addDesign(design) {
  return { type: "ADD_DESIGN", payload: design };
}

export function fetchDesign(designId) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/designs/${designId}`)
      .then(resp => resp.json())
      .then(design => {
        dispatch({ type: "FETCHED_DESIGN", payload: design });
      });
  };
}
