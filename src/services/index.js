//RESTFUL functions
export function post(url, postData) {
  return fetch(url, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  }).then(res => res.json());
}

export function get(url) {
  return fetch(url, {
    headers: { Accept: "application/json", "Content-Type": "application/json" }
  }).then(res => res.json());
}

export function patch(url, postData) {
  return fetch(url, {
    method: "PATCH",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  }).then(res => res.json());
}

export function destroy(url) {
  return fetch(url, {
    method: "DELETE",
    headers: { Accept: "application/json", "Content-Type": "application/json" }
  }).then(res => res.json());
}

//Specific action functions
const baseURL = "http://localhost:3000/api/v1";

export function createUser(postData) {
  return post(`${baseURL}/signup`, postData);
}

export function createComment(userId, designId, postData) {
  return post(
    `${baseURL}/users/${userId}/designs/${designId}/comments`,
    postData
  );
}

export function upvoteCommentAPI(commentId, postData) {
  return patch(`${baseURL}/comments/${commentId}`, postData);
}

export function addLikeAPI(userId, designId) {
  return post(`${baseURL}/users/${userId}/designs/${designId}/likes`, {});
}

export function minusLikeAPI(userId, designId, likeId) {
  return destroy(
    `${baseURL}/users/${userId}/designs/${designId}/likes/${likeId}`
  );
}

export function addDesignAPI(postData, userId) {
  return post(`${baseURL}/users/${userId}/designs`, postData);
}

export function createRelationship(userId, postData) {
  return post(`${baseURL}/users/${userId}/relationships`, postData);
}

export function deleteRelationship(userId, currentUserId) {
  return destroy(`${baseURL}/users/${userId}/relationships/${currentUserId}`);
}

export function fetchUserProjects(userId) {
  return get(`${baseURL}/users/${userId}/projects`);
}

export function createAloneProject(userId, postData) {
  return post(`${baseURL}/users/${userId}/projects`, postData);
}

export function saveDesigntoProject(userId, postData) {
  return post(`${baseURL}/users/${userId}/project_designs`, postData);
}
// export function getUserInfo(userId) {
//   return get(`${baseURL}/users/${userId}`);
// }

export function login(postData) {
  return post(`${baseURL}/signin`, postData);
}
