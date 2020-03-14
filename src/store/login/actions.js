// import {encode} from "base-64";
import {tokens} from "../../data/AdminQueries";
import {ACTIVE_USER} from "../../data/Constants";
import {setActiveAdmin} from "../navigationHeader/actions";

export const LOGIN_CHANGE_FIELDS = 'LOGIN_CHANGE_FIELDS';
export const LOGIN_FIELDS_CHECK_VALIDATION = 'LOGIN_FIELDS_CHECK_VALIDATION';
export const LOGIN_FORM_CLOSE = 'LOGIN_FORM_CLOSE';
export const LOGIN_FORM_OPEN = 'LOGIN_FORM_OPEN';
export const LOGIN_AUTHORIZATION_SUCCESS = 'LOGIN_AUTHORIZATION_SUCCESS';
export const LOGIN_AUTHORIZATION_ERROR = 'LOGIN_AUTHORIZATION_ERROR';
export const LOGOFF = 'LOGOFF';

export const openForm = () => ({
    type: LOGIN_FORM_OPEN,
    payload: {}
});

export const closeForm = () => ({
    type: LOGIN_FORM_CLOSE,
    payload: {}
});

export const changeField = (id, value, isValid) => ({
    type: LOGIN_CHANGE_FIELDS,
    payload: {
        id,
        value,
        isValid
    }
});

export const checkValidation = () => ({
    type: LOGIN_FIELDS_CHECK_VALIDATION,
    payload: {}
});

export const authorization = (data) => {
    return dispatch => tokens(getObject(data))
        .then(user => {
            if (user.error) {
                return dispatch(authorizationError());
            } else {
                user = {
                    ...user,
                    endDate: Date.now() + user.expires_in * 1000
                };
                console.log('tokens 1 (for)', user);
                localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
                dispatch(authorizationSuccess());
                dispatch(setActiveAdmin(true));
            }
        });
};

export const authorizationSuccess = () => ({
    type: LOGIN_AUTHORIZATION_SUCCESS,
    payload: {}
});

export const authorizationError = () => ({
    type: LOGIN_AUTHORIZATION_ERROR,
    payload: {}
});

export const getObject = (data) => {
    let obj = {};
    for (let i in data) {
        // console.log(data[i]);
        obj = {
            ...obj,
            [data[i].id]: data[i].value
        };
    }
    return obj;
};