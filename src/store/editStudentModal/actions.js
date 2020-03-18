import {loadCoursesData, loadScienceDirectionsData, loadUniversitiesData} from "../data/actions";
import {changeStudent, deleteStudent, token} from "../../data/AdminQueries";
import {showNotificationModal} from "../notificationModal/actions";
import {MSG_ERROR_SEND_FORM_REGISTRATION} from "../../data/Constants";
import {loadParticipants} from "../participants/actions";

export const EDIT_STUDENT_MODAL_SHOW = 'EDIT_STUDENT_MODAL_SHOW';
export const EDIT_STUDENT_MODAL_HIDE = 'EDIT_STUDENT_MODAL_HIDE';
export const EDIT_STUDENT_MODAL_SAVE_EDIT_STUDENT = 'EDIT_STUDENT_MODAL_SAVE_EDIT_STUDENT';
export const EDIT_STUDENT_MODAL_CHANGE_FIELD = 'EDIT_STUDENT_MODAL_CHANGE_FIELD';
export const EDIT_STUDENT_MODAL_FIELDS_CHECK_VALIDATION = 'EDIT_STUDENT_MODAL_FIELDS_CHECK_VALIDATION';

export const showEditStudentModal = (student) => {
    return dispatch => {
        dispatch(loadCoursesData());
        dispatch(loadScienceDirectionsData());
        dispatch(loadUniversitiesData());
        dispatch(setEditStudentModal(student));
    }
};

const setEditStudentModal = (student) => ({
    type: EDIT_STUDENT_MODAL_SHOW,
    payload: {
        student,
        show: true
    }
});

export const hideEditStudentModal = () => ({
    type: EDIT_STUDENT_MODAL_HIDE,
    payload: {
        show: false
    }
});

export const saveEditStudent = (student) => {
    return dispatch => {
        token()
            .then(token => {
                changeStudent(token, getObject(student))
                    .then(res => {
                        if (res.error) {
                            dispatch(showNotificationModal(false, MSG_ERROR_SEND_FORM_REGISTRATION));
                        } else {
                            dispatch(setEditStudent());
                            dispatch(loadParticipants());
                        }
                    })
            })
    }
};

export const deleteEditStudent = (student) => {
    return dispatch => {
        token()
            .then(token => {
                deleteStudent(token, getObject(student))
                    .then(res => {
                        console.log('O B A', res);
                        if (res.error) {
                            dispatch(showNotificationModal(false, MSG_ERROR_SEND_FORM_REGISTRATION));
                        } else {
                            dispatch(setEditStudent());
                            dispatch(loadParticipants());
                        }
                    });
            });
    }
};


export const setEditStudent = () => ({
    type: EDIT_STUDENT_MODAL_SAVE_EDIT_STUDENT,
    payload: {}
});

export const changeField = (id, value, isValid, required) => ({
    type: EDIT_STUDENT_MODAL_CHANGE_FIELD,
    payload: {
        id,
        value,
        required,
        isValid
    }
});

export const checkValidation = () => ({
    type: EDIT_STUDENT_MODAL_FIELDS_CHECK_VALIDATION,
    payload: {}
});

const getObject = (student) => {
    let studentObj = {};
    for (let i in student) {
        studentObj = {
            ...studentObj,
            [i]: student[i].value
        }
    }
    return studentObj;
};
