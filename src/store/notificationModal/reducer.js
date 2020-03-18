import {NOTIFICATION_MODAL_HIDE, NOTIFICATION_MODAL_SHOW} from "./actions";

const defaultState = {
    show: false,
    text: '',
    typeIsOk: false
};

export const notificationModalReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case NOTIFICATION_MODAL_SHOW:
            return {
                ...state,
                show: payload.show,
                text: payload.text,
                typeIsOk: payload.typeIsOk
            };
        case NOTIFICATION_MODAL_HIDE:
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