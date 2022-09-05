import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dropdownReducer from "./dropdownReducer";
import languageReducer from "./languageReducer";
import textReducer from "./textReducer";

export const reducers=combineReducers({
    language: languageReducer,
    text: textReducer,
    dropdown: dropdownReducer,
    auth: authReducer
});

