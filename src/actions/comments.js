export function fetchComments(designId) {
  return dispatch => {
    dispatch({ type: "START_FETCHING_DESIGN_COMMENTS_REQUEST" });
    return fetch(`http://localhost:3000/api/v1/designs/${designId}/comments`)
      .then(resp => resp.json())
      .then(comments => {
        dispatch({ type: "FETCHED_COMMENTS", payload: comments });
      });
  };
}

export function addComment(comment) {
  return { type: "ADD_COMMENT", payload: comment };
}

export function voteComment(commentId) {
  return { type: "UPVOTE_COMMENT", payload: commentId };
}
