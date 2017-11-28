import uuid from "uuid";

export default function users(state = { user: null }, action) {
  switch (action.type) {
    case "FETCHED_USER":
      return Object.assign({}, state, { user: action.payload });

    case "ADD_FOLLOWER":
      const newUser = { ...state.user };
      newUser["followers"] = [...newUser["followers"], action.payload];
      return Object.assign({}, state, { user: newUser });
    case "DELETE_FOLLOWER":
      const updateUser = { ...state.user };
      updateUser["followers"] = updateUser["followers"].filter(
        fol => fol.id === parseInt(action.payload.id)
      );
      return Object.assign({}, state, { user: updateUser });
    default:
      return state;
  }
}
