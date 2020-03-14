import {
    REGISTRATION_CHANGE_ALLOW_CHECKBOX,
    REGISTRATION_CHANGE_FIELDS,
    REGISTRATION_CHANGE_FILE,
    REGISTRATION_CLEAR_FORM,
    REGISTRATION_FIELDS_CHECK_VALIDATION,
    REGISTRATION_LOAD_COURSES_DATA,
    REGISTRATION_LOAD_SCIENCE_DIRECTIONS_DATA,
    REGISTRATION_LOAD_UNIVERSITIES_DATA
} from "./actions";

const defaultState = {
    settings: {
        sending: false,
        isAllowed: false,
        isValid: null
    },
    // courses: [],
    // scienceDirections: [],
    // universities: [],
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
            id: 'phone',
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
        case REGISTRATION_CLEAR_FORM:
            console.log(REGISTRATION_CLEAR_FORM);
            return {
                ...state,
                fields: state.fields.map(i => {
                    i.value = '';
                    i.isValid = null;
                    return i;
                }),
                file: {
                    ...state.file,
                    value: new File([], ''),
                    isValid: null

                },
                settings: {
                    ...state.settings,
                    isAllowed: false
                }
            };
        default:
            return state;
    }
};