import {PROCESSING_HIDE, PROCESSING_SHOW} from "./actions";

const defaultState = {
    show: false,
    text: ""
};

export const processingReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case PROCESSING_SHOW:
            return {
                ...state,
                show: payload.show,
                text: payload.text
            };
        case PROCESSING_HIDE:
            return {
                ...state, show: payload.show
            };
        default:
            return state;

    }
};