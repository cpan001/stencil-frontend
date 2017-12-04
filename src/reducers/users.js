export default function users(
  state = { user: null, viewer: null, loggedIn: null },
  action
) {
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
        fol => fol.id !== parseInt(action.payload.id, 10)
      );
      return Object.assign({}, state, { user: updateUser });
    case "LOGIN_ERROR":
      return Object.assign({}, state, { loggedIn: false });
    case "LOGIN_USER":
      localStorage.setItem("jwt", action.payload.jwt);
      return Object.assign(
        {},
        state,
        { loggedIn: true },
        { viewer: action.payload.user }
      );
    case "LOGOUT_USER":
      localStorage.removeItem("jwt");
      return Object.assign({}, state, { loggedIn: false }, { viewer: null });
    case "SIGNUP_USER":
      localStorage.setItem("jwt", action.payload.jwt);
      return Object.assign(
        {},
        state,
        { loggedIn: true },
        { viewer: action.payload.user }
      );
    default:
      return state;
  }
}
