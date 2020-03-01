import {
    REGISTRATION_CHANGE_ALLOW_CHECKBOX,
    REGISTRATION_CHANGE_FIELDS,
    REGISTRATION_CHANGE_FILE,
    REGISTRATION_END_SUBMIT,
    REGISTRATION_FIELDS_CHECK_VALIDATION,
    REGISTRATION_LOAD_COURSES_DATA,
    REGISTRATION_LOAD_SCIENCE_DIRECTIONS_DATA,
    REGISTRATION_LOAD_UNIVERSITIES_DATA,
    REGISTRATION_START_SUBMIT,
    REGISTRATION_NOTIFICATION, REGISTRATION_NOTIFICATION_CLOSE
} from "./actions";

const defaultState = {
    settings: {
        sending: false,
        isAllowed: false,
        isValid: null
    },
    notification: {
        isOk: null,
        show: false
    },
    courses: [],
    scienceDirections: [],
    universities: [],
    file: {
        id: 'file',
        value: new File([], ''),
        required: true,
        isValid: null
    },
    fields: [
        {
            id: 'surname',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'name',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'patronymic',
            value: '',
            required: false,
            isValid: null
        },
        {
            id: 'university',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'course',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'faculty',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'email',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'number',
            value: '',
            required: false,
            isValid: null
        },
        {
            id: 'scienceDirection',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'topic',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c1',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c2',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c3',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c4',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c5',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c6',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c7',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c8',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c9',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c10',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c11',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c12',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c13',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c14',
            value: '',
            required: true,
            isValid: null
        },
        {
            id: 'c15',
            value: '',
            required: true,
            isValid: null
        }
    ]
};

export const registrationReducer = (state = defaultState, {type, payload}) => {
    console.log(payload);
    switch (type) {
        case REGISTRATION_CHANGE_FIELDS:
            console.log('payload', payload);
            return {
                ...state,
                fields: state.fields.map(i => {
                    if (payload.id === i.id) {
                        i.value = payload.value;
                        i.isValid = payload.isValid;
                    }
                    return i;
                })
            };
        case REGISTRATION_LOAD_COURSES_DATA:
            console.log('->' + REGISTRATION_LOAD_COURSES_DATA + '<-');
            return {
                ...state, courses: payload
            };
        case REGISTRATION_LOAD_SCIENCE_DIRECTIONS_DATA:
            return {
                ...state, scienceDirections: payload
            };
        case REGISTRATION_LOAD_UNIVERSITIES_DATA:
            return {
                ...state, universities: payload
            };
        case REGISTRATION_CHANGE_ALLOW_CHECKBOX:
            return {
                ...state, settings: {
                    ...state.settings,
                    isAllowed: payload
                }
            };
        case REGISTRATION_CHANGE_FILE:
            return {
                ...state, file: {
                    ...state.file,
                    value: payload.value !== undefined ? payload.value : new File([], ''),
                    isValid: payload.isValid,
                }
            };
        case REGISTRATION_FIELDS_CHECK_VALIDATION:
            console.log(REGISTRATION_FIELDS_CHECK_VALIDATION);
            let isValid = true;
            return {
                ...state,
                fields: state.fields.map(v => {
                    if (v.required && !v.isValid) {
                        v.isValid = false;
                        isValid = false;
                        return v;
                    }
                    return v;
                }),
                file: {
                    ...state.file,
                    isValid: state.file.value.name !== '' && state.file.required ? true : isValid = false
                },
                settings: {
                    ...state.settings,
                    isValid: isValid
                }
            };
        case REGISTRATION_START_SUBMIT:
            console.log(REGISTRATION_START_SUBMIT);
            return {
                ...state, settings: {
                    ...state.settings,
                    sending: payload
                }
            };
        case REGISTRATION_END_SUBMIT:
            console.log(REGISTRATION_END_SUBMIT);
            return {
                ...state, settings: {
                    ...state.settings,
                    sending: payload
                }
            };
        case REGISTRATION_NOTIFICATION:
            console.log(REGISTRATION_NOTIFICATION, payload);
            return {
                ...state,
                notification: {
                    ...state.notification,
                    isOk: payload.isOk,
                    show: payload.show
                }
            };
        case REGISTRATION_NOTIFICATION_CLOSE:
            console.log(REGISTRATION_NOTIFICATION_CLOSE);
            return {
                ...state,
                fields: state.fields.map(i => {
                    if (payload.isOk === true) {
                        i.value = '';
                        i.isValid = null;
                    }
                    return i;
                }),
                file: {
                    ...state.file,
                    value: payload.isOk ? new File([], '') : state.file.value,
                    isValid: payload.isOk ? null : state.file.isValid

                },
                settings: {
                    ...state.settings,
                    isAllowed: payload.isOk ? false : state.settings.isAllowed
                },
                notification: {
                    ...state.notification,
                    isOk: null,
                    show: false
                }
            };
        default:
            return state;
    }
};