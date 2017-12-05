import { signInUser, createUser } from "../services/index";

export function fetchUser(userId) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
    })
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

export function signUpUser(user) {
  return dispatch => {
    createUser(user)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch({ type: "SIGNUP_ERROR" });
        }
      })
      .then(userData => {
        userData ? dispatch({ type: "SIGNUP_USER", payload: userData }) : null;
      });
  };
}

export function loginUser(user) {
  return dispatch => {
    signInUser(user)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch({ type: "LOGIN_ERROR" });
        }
      })
      .then(userData => {
        userData ? dispatch({ type: "LOGIN_USER", payload: userData }) : null;
      });
  };
}

export function logOutUser() {
  return { type: "LOGOUT_USER" };
}
