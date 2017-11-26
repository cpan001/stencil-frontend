import uuid from "uuid";

function comments(state = { isFetching: false, comments: {} }, action) {
  switch (action.type) {
    case "START_FETCHING_DESIGN_COMMENTS_REQUEST":
      return Object.assign({}, state, { isFetching: true });
    case "FETCHED_COMMENTS":
      let comments = action.payload.reduce((acc, obj) => {
        acc[obj.id] = obj;
        return acc;
      }, {});
      return Object.assign({}, state, { isFetching: false }, { comments });
    case "ADD_COMMENT":
      let allComments = { ...state.comments };
      allComments[uuid()] = action.payload;
      console.log(allComments);
      return Object.assign({}, state, { comments: allComments });
    case "UPVOTE_COMMENT":
      let commentsAll = { ...state.comments };
      let comment = commentsAll[action.payload];
      comment["votes"] += 1;
      return Object.assign({}, state, { comments: commentsAll });
    default:
      return state;
  }
}

export default comments;
