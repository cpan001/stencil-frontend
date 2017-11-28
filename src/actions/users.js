export function fetchUser(userId) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${userId}`)
      .then(resp => resp.json())
      .then(user => dispatch({ type: "FETCHED_USER", payload: user }));
  };
}
