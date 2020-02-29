// import {encode} from "base-64";
import {getTokens} from "../../data/AdminQueries";

export const LOGIN_CHANGE_FIELDS = 'LOGIN_CHANGE_FIELDS';
export const LOGIN_FIELDS_CHECK_VALIDATION = 'LOGIN_FIELDS_CHECK_VALIDATION';
export const LOGIN_FORM_CLOSE = 'LOGIN_FORM_CLOSE';
export const LOGIN_FORM_OPEN = 'LOGIN_FORM_OPEN';
export const LOGIN_AUTHORIZATION_SUCCESS = 'LOGIN_AUTHORIZATION_SUCCESS';
export const LOGIN_AUTHORIZATION_ERROR = 'LOGIN_AUTHORIZATION_ERROR';

export const openForm = () => ({
    type: LOGIN_FORM_OPEN,
    payload: {}
});

export const closeForm = () => ({
    type: LOGIN_FORM_CLOSE,
    payload: {}
});

export const changeField = (id, value, /*required,*/ isValid) => ({
    type: LOGIN_CHANGE_FIELDS,
    payload: {
        id,
        value,
        // required,
        isValid
    }
});

export const checkValidation = () => ({
    type: LOGIN_FIELDS_CHECK_VALIDATION,
    payload: {}
});

export const authorization = (data) => {
    return (dispatch) => getTokens(getObject(data))
        .then(user => {
            if (user.error) {
                return dispatch(setError())
            } else {
                return dispatch(setUser(user));
            }
        });
};

export const setUser = (user) => ({
    type: LOGIN_AUTHORIZATION_SUCCESS,
    payload: user
});

export const setError = () => ({
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