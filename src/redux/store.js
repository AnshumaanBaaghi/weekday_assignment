import { applyMiddleware, legacy_createStore } from "redux";
import { Reducer } from "./reducer";
import { thunk } from "redux-thunk";

export const store = legacy_createStore(Reducer, applyMiddleware(thunk));
