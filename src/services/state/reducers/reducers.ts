/* eslint-disable prettier/prettier */
import { combineReducers } from "redux";
import networkReducer from "./network";
import loggerReducer from "./logger";

const allReducers = combineReducers({
    network: networkReducer,
    logger: loggerReducer
});

export default allReducers;