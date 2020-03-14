import {
    LOGIN_AUTHORIZATION_ERROR,
    LOGIN_AUTHORIZATION_SUCCESS,
    LOGIN_CHANGE_FIELDS,
    LOGIN_FIELDS_CHECK_VALIDATION,
    LOGIN_FORM_CLOSE,
    LOGIN_FORM_OPEN
} from "./actions";

const defaultState = {
    // isAdminActive: null,
    settings: {
        isValid: null,
        show: false
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
                        i.show = payload.show;
                    }
                    return i;
                })
            };
        case LOGIN_FIELDS_CHECK_VALIDATION:
            return {
                ...state, fields: state.fields.map(v => {
                    if (v.required && !v.isValid) {
                        v.show = false;
                        return v;
                    }
                    return v;
                })
            };
        case LOGIN_AUTHORIZATION_SUCCESS:
            console.log(LOGIN_AUTHORIZATION_SUCCESS);
            return {
                ...state,
                // isAdminActive: true,
                settings: {
                    show: false
                },
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
            return {
                ...state,
                settings: {
                    show: true
                }
            };
        case LOGIN_FORM_CLOSE:
            return {
                ...state,
                settings: {
                    show: false
                },
                fields: state.fields.map(i => {
                    i.isValid = null;
                    i.value = '';
                    return i;
                })
            };
        // case LOGOFF:
        //     return {
        //         ...state,
        //         isAdminActive: null
        //     };

        default:
            return state;
    }
};