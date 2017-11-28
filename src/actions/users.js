export function fetchUser(userId) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${userId}`)
      .then(resp => resp.json())
      .then(user => dispatch({ type: "FETCHED_USER", payload: user }));
  };
}

export function addFollower(currentUser) {
  return { type: "ADD_FOLLOWER", payload: currentUser };
}

export function deleteFollower(currentUser) {
  return { type: "DELETE_FOLLOWER", payload: currentUser };
}
