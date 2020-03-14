import {MODAL_HIDE, MODAL_SHOW} from "./actions";

const defaultState = {
    show: false,
    text: '',
    typeIsOk: false
};

export const alertReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case MODAL_SHOW:
            return {
                ...state,
                show: payload.show,
                text: payload.text,
                typeIsOk: payload.typeIsOk
            };
        case MODAL_HIDE:
            return {
                ...state,
                show: payload.show,
                text: '',
                typeIsOk: false
            };
        default:
            return state;

    }
};