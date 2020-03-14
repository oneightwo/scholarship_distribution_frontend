import {getSettings} from "../../data/StudentQueries";
import {changeSettings, token} from "../../data/AdminQueries";
import {ACTIVE_USER} from "../../data/Constants";

export const NAVIGATION_CHANGE_ACTIVE_REGISTRATION = 'NAVIGATION_CHANGE_ACTIVE_REGISTRATION';
export const NAVIGATION_ADMIN_ACTIVE = 'NAVIGATION_ADMIN_ACTIVE';
// export const NAVIGATION_ADMIN_SET_ADMIN = 'NAVIGATION_CHANGE_ACTIVE_REGISTRATION';

export const setActiveRegistration = (isActive) => ({
    type: NAVIGATION_CHANGE_ACTIVE_REGISTRATION,
    payload: isActive
});

export const setActiveAdmin = (isActive) => ({
    type: NAVIGATION_ADMIN_ACTIVE,
    payload: isActive
});

export const initNavHeader = () => {
    return dispatch => {
        getSettings()
            .then(data => {
                console.log('getSettings', data[0]);
                if (data.error) {

                } else {
                    dispatch(setActiveRegistration(data[0].activeRegistration));
                }
            });
    }
};

export const logoff = () => {
    localStorage.removeItem(ACTIVE_USER);
    return dispatch => {
        dispatch(setActiveAdmin(false));
    };
};

export const changeActiveRegistration = (isActive) => {
    return dispatch => token()
        .then(token => {
            console.log('changeActiveRegistration 1, token', isActive, token);
            changeSettings(token, isActive)
                .then(result => {
                    console.log('changeActiveRegistration 2', result);
                    dispatch(setActiveRegistration(result.activeRegistration));
                });
        });
};
