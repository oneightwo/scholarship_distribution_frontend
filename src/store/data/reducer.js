import {DATA_LOAD_COURSES, DATA_LOAD_SCIENCE_DIRECTIONS, DATA_LOAD_UNIVERSITIES} from "./actions";

const defaultState = {
    courses: [],
    scienceDirections: [],
    universities: []
};

export const dataReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case DATA_LOAD_COURSES:
            return {
                ...state,
                courses: payload
            };
        case DATA_LOAD_SCIENCE_DIRECTIONS:
            return {
                ...state,
                scienceDirections: payload
            };
        case DATA_LOAD_UNIVERSITIES:
            return {
                ...state,
                universities: payload
            };
        default:
            return state;

    }
};