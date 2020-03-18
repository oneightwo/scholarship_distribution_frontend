import {
    REPORTS_SET_REPORT_BY_DIRECTIONS,
    REPORTS_SET_REPORT_BY_UNIVERSITIES,
    REPORTS_SET_WINNERS_STUDENT
} from "./actions";


const defaultState = {
    listWinnerStudents: {},
    reportByDirections: [{}],
    reportByUniversities: [{0:[]}]
};

export const reportsReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case REPORTS_SET_WINNERS_STUDENT:
            return {
                ...state,
                listWinnerStudents: payload
            };
        case REPORTS_SET_REPORT_BY_DIRECTIONS:
            return {
                ...state,
                reportByDirections: payload
            };
        case REPORTS_SET_REPORT_BY_UNIVERSITIES:
            return {
                ...state,
                reportByUniversities: payload
            };
        default:
            return state;

    }
};