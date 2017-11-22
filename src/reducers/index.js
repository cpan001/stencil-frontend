import { combineReducers } from "redux";
import designs from "./designs";
import projects from "./projects";

const rootReducer = combineReducers({ designs, projects });

export default rootReducer;
