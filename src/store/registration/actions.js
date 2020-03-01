import {
    getCourse,
    getScienceDirection,
    getUniversities,
    submitFile,
    submitFormRegistration
} from "../../data/StudentQueries";

export const REGISTRATION_CHANGE_FIELDS = 'REGISTRATION_CHANGE_FIELDS';
export const REGISTRATION_LOAD_COURSES_DATA = 'REGISTRATION_LOAD_COURSES_DATA';
export const REGISTRATION_LOAD_UNIVERSITIES_DATA = 'REGISTRATION_LOAD_UNIVERSITIES_DATA';
export const REGISTRATION_LOAD_SCIENCE_DIRECTIONS_DATA = 'REGISTRATION_LOAD_SCIENCE_DIRECTIONS_DATA';
export const REGISTRATION_CHANGE_ALLOW_CHECKBOX = 'REGISTRATION_CHANGE_ALLOW_CHECKBOX';
export const REGISTRATION_CHANGE_FILE = 'REGISTRATION_CHANGE_FILE';
export const REGISTRATION_NOTIFICATION = 'REGISTRATION_NOTIFICATION';
export const REGISTRATION_NOTIFICATION_CLOSE = 'REGISTRATION_NOTIFICATION_CLOSE';
export const REGISTRATION_START_SUBMIT = 'REGISTRATION_START_SUBMIT';
export const REGISTRATION_END_SUBMIT = 'REGISTRATION_END_SUBMIT';
export const REGISTRATION_FIELDS_CHECK_VALIDATION = 'REGISTRATION_FIELDS_CHECK_VALIDATION';

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

export const loadCoursesData = () => {
    return (dispatch) => getCourse()
        .then(c => {
            if (c.error) {
                dispatch(setError('c'));
            } else {
                dispatch(setCourses(c));
            }
        })
};

export const loadUniversitiesData = () => {
    return (dispatch) => getUniversities()
        .then(u => {
            if (u.error) {
                dispatch(setError('u'));
            } else {
                dispatch(setUniversities(u));
            }
        })
};

export const loadScienceDirectionsData = () => {
    return (dispatch) => getScienceDirection()
        .then(sd => {
            if (sd.error) {
                dispatch(setError('sd'));
            } else {
                dispatch(setScienceDirections(sd));
            }
        })
};

export const submitForm = (data, file) => {
    console.log('submitForm', data, file);
    return (dispatch) => {
        dispatch(startSubmit());
        submitFormRegistration(getObject(data))
            .then(res => {
                if (res.error) {
                    dispatch(notification(false, true));
                } else {
                    console.log(res);
                    Object.defineProperty(file.value, 'name', {
                        writable: true,
                        value: res.id + '.pdf'
                    });
                    submitFile(file.value)
                        .then(res => {
                                if (res.error) {
                                    dispatch(notification(false, true));
                                } else {
                                    dispatch(endSubmit());
                                    dispatch(notification(true, true));
                                }
                            }
                        )
                        .catch((e) => {
                            dispatch(endSubmit());
                            dispatch(notification(false, true));
                        });
                }
            })
            .catch((e) => {
                dispatch(endSubmit());
                dispatch(notification(false, true));
            });
    }
};

export const startSubmit = () => ({
    type: REGISTRATION_START_SUBMIT,
    payload: true
});

export const endSubmit = () => ({
    type: REGISTRATION_END_SUBMIT,
    payload: false
});

export const notification = (isOk = null, show) => ({
    type: REGISTRATION_NOTIFICATION,
    payload: {
        isOk,
        show
    }
});

export const closeNotification = (isOk) => ({
    type: REGISTRATION_NOTIFICATION_CLOSE,
    payload: {
        isOk
    }
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

const setCourses = (data) => ({
    type: REGISTRATION_LOAD_COURSES_DATA,
    payload: data
});

const setUniversities = (data) => ({
    type: REGISTRATION_LOAD_UNIVERSITIES_DATA,
    payload: data
});

const setScienceDirections = (data) => ({
    type: REGISTRATION_LOAD_SCIENCE_DIRECTIONS_DATA,
    payload: data
});

const setError = (str) => {
    console.log('ERRROR ' + str);
};
