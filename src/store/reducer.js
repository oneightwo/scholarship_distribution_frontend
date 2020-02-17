import {combineReducers} from "redux";
import {loginReducer} from "./login/reducer";
import {navigationReducer} from "./navigationHeader/actions";
import {registrationReducer} from "./registration/reducer";

export default combineReducers({
    login: loginReducer,
    navigation: navigationReducer,
    registration: registrationReducer
});