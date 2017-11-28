import { combineReducers } from "redux";
import designs from "./designs";
import projects from "./projects";
import comments from "./comments";
import users from "./users";

const rootReducer = combineReducers({ designs, projects, comments, users });

export default rootReducer;
