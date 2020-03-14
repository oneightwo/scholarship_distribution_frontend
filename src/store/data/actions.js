import {getCourse, getScienceDirection, getUniversities} from "../../data/StudentQueries";
import {
    MSG_ERROR_LOAD_COURSES,
    MSG_ERROR_LOAD_DATA,
    MSG_ERROR_LOAD_SCIENCE_DIRECTIONS,
    MSG_ERROR_LOAD_UNIVERSITIES
} from "../../data/Constants";
import {showNotificationModal} from "../notificationModal/actions";

export const DATA_LOAD_COURSES = 'DATA_LOAD_COURSES';
export const DATA_LOAD_UNIVERSITIES = 'DATA_LOAD_UNIVERSITIES';
export const DATA_LOAD_SCIENCE_DIRECTIONS = 'DATA_LOAD_SCIENCE_DIRECTIONS';


export const loadCoursesData = () => {
    return (dispatch) => getCourse()
        .then(c => {
            if (c.error) {
                dispatch(showNotificationModal(false, MSG_ERROR_LOAD_DATA));
                console.log(MSG_ERROR_LOAD_COURSES);
            } else {
                dispatch(setCourses(c));
            }
        })
};

export const loadUniversitiesData = () => {
    return (dispatch) => getUniversities()
        .then(u => {
            if (u.error) {
                dispatch(showNotificationModal(false, MSG_ERROR_LOAD_DATA));
                console.log(MSG_ERROR_LOAD_UNIVERSITIES);
            } else {
                dispatch(setUniversities(u));
            }
        })
};

export const loadScienceDirectionsData = () => {
    return (dispatch) => getScienceDirection()
        .then(sd => {
            if (sd.error) {
                dispatch(showNotificationModal(false, MSG_ERROR_LOAD_DATA));
                console.log(MSG_ERROR_LOAD_SCIENCE_DIRECTIONS);
            } else {
                dispatch(setScienceDirections(sd));
            }
        })
};

const setCourses = (data) => ({
    type: DATA_LOAD_COURSES,
    payload: data
});

const setUniversities = (data) => ({
    type: DATA_LOAD_UNIVERSITIES,
    payload: data
});

const setScienceDirections = (data) => ({
    type: DATA_LOAD_SCIENCE_DIRECTIONS,
    payload: data
});
