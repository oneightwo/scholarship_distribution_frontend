import {submitFile, submitFormRegistration} from "../../data/StudentQueries";
import {hideProcessing, showProcessing} from "../processing/actions";
import {showNotificationModal} from "../notificationModal/actions";
import {MSG_ERROR_SEND_FORM_REGISTRATION, MSG_SUCCESS_SEND_FORM_REGISTRATION, SEND} from "../../data/Constants";

export const REGISTRATION_CHANGE_FIELDS = 'REGISTRATION_CHANGE_FIELDS';
export const REGISTRATION_CHANGE_ALLOW_CHECKBOX = 'REGISTRATION_CHANGE_ALLOW_CHECKBOX';
export const REGISTRATION_CHANGE_FILE = 'REGISTRATION_CHANGE_FILE';
export const REGISTRATION_FIELDS_CHECK_VALIDATION = 'REGISTRATION_FIELDS_CHECK_VALIDATION';
export const REGISTRATION_CLEAR_FORM = 'REGISTRATION_CLEAR_FORM';

export const changeField = (id, value, required, isValid) => ({
    type: REGISTRATION_CHANGE_FIELDS,
    payload: {
        id,
        value,
        required,
        isValid
    }
});

export const changeFile = (id, value, required, isValid) => ({
    type: REGISTRATION_CHANGE_FILE,
    payload: {
        id,
        value,
        required,
        isValid
    }
});

export const submitForm = (data, file) => {
    console.log('submitForm', data, file);
    return (dispatch) => {
        dispatch(showProcessing(SEND));
        submitFormRegistration(getObject(data))
            .then(res => {
                if (res.error) {
                    dispatch(showNotificationModal(false, MSG_ERROR_SEND_FORM_REGISTRATION));
                } else {
                    console.log(res);
                    Object.defineProperty(file.value, 'name', {
                        writable: true,
                        value: res.id + '.pdf'
                    });
                    submitFile(file.value)
                        .then(res => {
                                if (res.error) {
                                    dispatch(showNotificationModal(false, MSG_ERROR_SEND_FORM_REGISTRATION));
                                } else {
                                    dispatch(clearForm());
                                    dispatch(hideProcessing());
                                    dispatch(showNotificationModal(true, MSG_SUCCESS_SEND_FORM_REGISTRATION));
                                }
                            }
                        )
                        .catch((e) => {
                            dispatch(hideProcessing());
                            dispatch(showNotificationModal(false, MSG_ERROR_SEND_FORM_REGISTRATION));
                        });
                }
            })
            .catch((e) => {
                dispatch(hideProcessing());
                dispatch(showNotificationModal(false, MSG_ERROR_SEND_FORM_REGISTRATION));
            });
    }
};

export const clearForm = () => ({
    type: REGISTRATION_CLEAR_FORM,
    payload: {}
});

export const getObject = (data) => {
    let obj = {};
    for (let i in data) {
        console.log(data[i]);
        obj = {
            ...obj,
            [data[i].id]: data[i].value
        };
    }
    return obj;
};

export const setAllowed = (isAllow) => ({
    type: REGISTRATION_CHANGE_ALLOW_CHECKBOX,
    payload: isAllow
});

export const checkValidation = () => ({
    type: REGISTRATION_FIELDS_CHECK_VALIDATION,
    payload: {}
});
