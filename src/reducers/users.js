export default function users(state = { user: null }, action) {
  switch (action.type) {
    case "FETCHED_USER":
      return Object.assign({}, state, { user: action.payload });
    default:
      return state;
  }
}
