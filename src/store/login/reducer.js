import {
    LOGIN_CHANGE_FIELDS,
    LOGIN_FIELDS_CHECK_VALIDATION,
    LOGIN_AUTHORIZATION_SUCCESS,
    LOGIN_FORM_OPEN,
    LOGIN_FORM_CLOSE, LOGIN_AUTHORIZATION_ERROR
} from "./actions";
import {ACTIVE_USER} from "../../data/Constants";

const defaultState = {
    settings: {
        isValid: null,
        isActive: false
    },
    fields: [
        {
            id: 'username',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'password',
            value: '',
            required: true,
            isValid: null
        }
    ]
};

export const loginReducer = (state = defaultState, {type, payload}) => {
    // console.log(payload);
    switch (type) {
        case LOGIN_CHANGE_FIELDS:
            return {
                ...state, fields: state.fields.map(i => {
                    if (payload.id === i.id) {
                        i.value = payload.value;
                        i.isValid = payload.isValid;
                    }
                    return i;
                })
            };
        case LOGIN_FIELDS_CHECK_VALIDATION:
            return {
                ...state, fields: state.fields.map(v => {
                    if (v.required && !v.isValid) {
                        v.isValid = false;
                        return v;
                    }
                    return v;
                })
            };
        case LOGIN_AUTHORIZATION_SUCCESS:
            // console.log(payload);
            localStorage.setItem(ACTIVE_USER, JSON.stringify(payload));
            return {
                ...state,
                settings: {isActive: false},
                fields: state.fields.map(i => {
                    i.isValid = null;
                    i.value = '';
                    return i;
                })
            };
        case LOGIN_AUTHORIZATION_ERROR:
            return {
                ...state,
                fields: state.fields.map(i => {
                    i.isValid = false;
                    i.value = '';
                    return i;
                })
            };
        case LOGIN_FORM_OPEN:
            // console.log(LOGIN_FORM_OPEN);
            return {
                ...state,
                settings: {isActive: true}
            };
        case LOGIN_FORM_CLOSE:
            return {
                ...state,
                settings: {isActive: false},
                fields: state.fields.map(i => {
                    i.isValid = null;
                    i.value = '';
                    return i;
                })
            };

        default:
            return state;
    }
};