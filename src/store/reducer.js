import {combineReducers} from "redux";
import {loginReducer} from "./login/reducer";
import {registrationReducer} from "./registration/reducer";
import {processingReducer} from "./processing/reducer";
import {navigationReducer} from "./navigationHeader/reducer";
import {alertReducer} from "./notificationModal/reducer";
import {editStudentModalReducer} from "./editStudentModal/reducer";
import {participantsReducer} from "./participants/reducer";
import {dataReducer} from "./data/reducer";

export default combineReducers({
    login: loginReducer,
    navigation: navigationReducer,
    registration: registrationReducer,
    processing: processingReducer,
    alert: alertReducer,
    editStudentModal: editStudentModalReducer,
    participants: participantsReducer,
    data: dataReducer
});