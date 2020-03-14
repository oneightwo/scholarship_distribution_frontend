import {NAVIGATION_ADMIN_ACTIVE, NAVIGATION_CHANGE_ACTIVE_REGISTRATION} from "./actions";

const defaultState = {
    activeRegistration : null,
    isAdminActive: false
};

export const navigationReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case NAVIGATION_ADMIN_ACTIVE:
            return {
                ...state, isAdminActive: payload
            };
        case NAVIGATION_CHANGE_ACTIVE_REGISTRATION:
            return {
                ...state, activeRegistration: payload
            };
        default:
            return state;

    }
};