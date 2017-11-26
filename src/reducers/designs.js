import uuid from "uuid";

function designs(state = { isFetching: false, designs: {} }, action) {
  switch (action.type) {
    case "START_FETCHING_DESIGNS_REQUEST":
      return Object.assign({}, state, { isFetching: true });
    case "FETCH_DESIGNS":
      let designs = action.payload.reduce((acc, obj) => {
        acc[obj.id] = obj;
        return acc;
      }, {});
      return Object.assign({}, state, { isFetching: false }, { designs });
    case "ADD_DESIGN":
      return state;
    case "ADD_LIKE":
      let allDesigns = { ...state.designs };
      let design = allDesigns[action.payload.designId];
      design["likes"] = [
        ...design["likes"],
        {
          id: uuid(),
          liker_id: action.payload.userId,
          design_id: action.payload.designId
        }
      ];
      return Object.assign({}, state, { designs: allDesigns });
    case "MINUS_LIKE":
      let aDesigns = { ...state.designs };
      let des = aDesigns[action.payload.designId];
      let likes = des.likes.filter(
        like => like.liker_id != action.payload.userId
      );
      des["likes"] = likes;
      return Object.assign({}, state, { designs: aDesigns });
    default:
      return state;
  }
}

export default designs;
