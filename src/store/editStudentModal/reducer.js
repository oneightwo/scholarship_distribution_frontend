import {
    EDIT_STUDENT_MODAL_CHANGE_FIELD,
    EDIT_STUDENT_MODAL_FIELDS_CHECK_VALIDATION,
    EDIT_STUDENT_MODAL_HIDE, EDIT_STUDENT_MODAL_SAVE_EDIT_STUDENT,
    EDIT_STUDENT_MODAL_SHOW
} from "./actions";


const defaultState = {
    student: {
        id: {value: null, isValid: true, required: true},
        surname: {value: 'null', isValid: true, required: true},
        name: {value: null, isValid: true, required: true},
        patronymic: {value: null, isValid: true, required: false},
        university: {
            value: {
                id: 3,
                name: 'Поволжский государственный университет телекоммуникаций и информатики',
                abbreviation: 'ПГУТИ'
            }, isValid: true, required: true
        },
        faculty: {value: '2', isValid: true, required: true},
        course: {value: {id: 2, name: 2}, isValid: true, required: true},
        email: {value: '2', isValid: true, required: true},
        phone: {value: null, isValid: true, required: false},
        scienceDirection: {value: {id: 3, name: 'Социальное'}, isValid: true, required: true},
        topic: {value: '2', isValid: true, required: true},
        c1: {value: 2, isValid: true, required: true},
        c2: {value: 2, isValid: true, required: true},
        c3: {value: 2, isValid: true, required: true},
        c4: {value: 2, isValid: true, required: true},
        c5: {value: 2, isValid: true, required: true},
        c6: {value: 2, isValid: true, required: true},
        c7: {value: 2, isValid: true, required: true},
        c8: {value: 2, isValid: true, required: true},
        c9: {value: 2, isValid: true, required: true},
        c10: {value: 2, isValid: true, required: true},
        c11: {value: 2, isValid: true, required: true},
        c12: {value: 2, isValid: true, required: true},
        c13: {value: 2, isValid: true, required: true},
        c14: {value: 2, isValid: true, required: true},
        c15: {value: 2, isValid: true, required: true},
        rating: {value: 12, isValid: true, required: true},
        dataRegistration: {value: '2020-03-01 14:36:29', isValid: true, required: true},
        valid: {value: false, isValid: true, required: true}
    },
    show: false,
    isValid: true
};

export const editStudentModalReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case EDIT_STUDENT_MODAL_SHOW:
            console.log(EDIT_STUDENT_MODAL_SHOW, payload);
            const student = payload.student;
            let transformStudent = {};
            for (let i in student) {
                transformStudent = {
                    ...transformStudent,
                    [i]: {
                        value: student[i],
                        isValid: true,
                        required: false
                    }
                }
            }
            return {
                ...state,
                show: payload.show,
                student: transformStudent
            };
        case EDIT_STUDENT_MODAL_HIDE:
            return {
                ...state,
                show: payload.show
            };
        case EDIT_STUDENT_MODAL_CHANGE_FIELD:
            return {
                ...state,
                student: {
                    ...state.student,
                    [payload.id]: {
                        value: payload.value,
                        isValid: payload.isValid,
                        required: payload.required
                    }
                }
            };
        case EDIT_STUDENT_MODAL_FIELDS_CHECK_VALIDATION:
            const vStudent = state.student;
            let isValid = true;
            for (let i in vStudent) {
                if (!vStudent[i].isValid && vStudent[i].required) {
                    isValid = false;
                }
            }
            return {
                ...state,
                isValid: isValid
            };
        case EDIT_STUDENT_MODAL_SAVE_EDIT_STUDENT:
            return {
                ...state,
                isValid: true,
                show: false
            };
        default:
            return state;

    }
};