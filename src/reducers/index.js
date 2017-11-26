import { combineReducers } from "redux";
import designs from "./designs";
import projects from "./projects";
import comments from "./comments";

const rootReducer = combineReducers({ designs, projects, comments });

export default rootReducer;
