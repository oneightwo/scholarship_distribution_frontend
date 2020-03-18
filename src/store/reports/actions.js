import {
    getCurrentReportsByDirections,
    getCurrentReportsByUniversities,
    getCurrentWinnerStudents,
    token
} from "../../data/AdminQueries";
import {showNotificationModal} from "../notificationModal/actions";
import {MSG_ERROR_LOAD_DATA} from "../../data/Constants";

export const REPORTS_SET_WINNERS_STUDENT = 'REPORTS_SET_WINNERS_STUDENT';
export const REPORTS_SET_REPORT_BY_DIRECTIONS = 'REPORTS_SET_REPORT_BY_DIRECTIONS';
export const REPORTS_SET_REPORT_BY_UNIVERSITIES = 'REPORTS_SET_REPORT_BY_UNIVERSITIES';

const setWinnerStudents = (listWinnersStudents) => ({
    type: REPORTS_SET_WINNERS_STUDENT,
    payload: listWinnersStudents
});

const setReportByDirections = (data) => ({
    type: REPORTS_SET_REPORT_BY_DIRECTIONS,
    payload: data
});

const setReportByUniversities = (data) => ({
    type: REPORTS_SET_REPORT_BY_UNIVERSITIES,
    payload: data
});

export const loadWinnerStudents = () => {
    return dispatch => {
        token()
            .then(token => {
                getCurrentWinnerStudents(token)
                    .then(res => {
                        if (res.error) {
                            dispatch(showNotificationModal(false, MSG_ERROR_LOAD_DATA));
                        } else {
                            dispatch(setWinnerStudents(res));
                        }
                    })
            })
    }
};

export const loadReportByDirections = () => {
    return dispatch => {
        token()
            .then(token => {
                getCurrentReportsByDirections(token)
                    .then(res => {
                        if (res.error) {
                            dispatch(showNotificationModal(false, MSG_ERROR_LOAD_DATA));
                        } else {
                            dispatch(setReportByDirections(res));
                        }
                    })
            })
    }
};

export const loadReportByUniversities = () => {
    return dispatch => {
        token()
            .then(token => {
                getCurrentReportsByUniversities(token)
                    .then(res => {
                        if (res.error) {
                            dispatch(showNotificationModal(false, MSG_ERROR_LOAD_DATA));
                        } else {
                            dispatch(setReportByUniversities(res));
                        }
                    })
            })
    }
};
