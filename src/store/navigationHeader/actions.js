import {NAVIGATION_OPEN_LOGIN_DIALOG} from "./reducer";


const defaultState = {

};

export const navigationReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case NAVIGATION_OPEN_LOGIN_DIALOG:
            // console.log(state);
            return state;
        default:
            return state;

    }
};