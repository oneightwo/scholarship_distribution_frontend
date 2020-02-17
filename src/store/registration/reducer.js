import {REGISTRATION_CHANGE_FIELDS} from "./actions";

const defaultState = {
    settings: {
        isValid: null,
        isActive: false
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
            required: true,
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
            return {
                ...state, fields: state.fields.map(i => {
                    if (payload.id === i.id) {
                        i.value = payload.value;
                        i.isValid = payload.isValid;
                    }
                    return i;
                })
            };
        default:
            return state;
    }
};