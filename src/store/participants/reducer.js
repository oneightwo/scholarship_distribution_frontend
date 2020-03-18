import {PARTICIPANTS_SEARCH_NAME, PARTICIPANTS_SET_DATA} from "./actions";


const defaultState = {
    data: [],
    listParticipants: [],
    search: ''
};

export const participantsReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case PARTICIPANTS_SET_DATA:
            return {
                ...state,
                data: payload,
                listParticipants: state.search === '' ? payload :
                    payload.filter(student => (student.surname + ' ' + student.name + ' ' + student.patronymic).toLowerCase().startsWith(state.search.toLowerCase(), 0))
            };
        case PARTICIPANTS_SEARCH_NAME:
            console.log(PARTICIPANTS_SEARCH_NAME, payload);
            return {
                ...state,
                search: payload,
                listParticipants: payload === '' ? state.data :
                    state.data.filter(student => (student.surname + ' ' + student.name + ' ' + student.patronymic).toLowerCase().startsWith(payload.toLowerCase(), 0))
            };
        default:
            return state;

    }
};