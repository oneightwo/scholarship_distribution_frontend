import {getCurrentParticipants, getCurrentReportsByDirections, token} from "../../data/AdminQueries";
import {showNotificationModal} from "../notificationModal/actions";
import {hideProcessing, showProcessing} from "../processing/actions";
import {LOAD} from "../../data/Constants";

export const PARTICIPANTS_SET_DATA = 'PARTICIPANTS_SET_DATA';
export const PARTICIPANTS_SEARCH_NAME = 'PARTICIPANTS_SEARCH_NAME';

const setParticipants = (listParticipants) => ({
    type: PARTICIPANTS_SET_DATA,
    payload: listParticipants
});

export const searchName = (value) => ({
    type: PARTICIPANTS_SEARCH_NAME,
    payload: value
});

export const loadParticipants = () => {
    return dispatch => {
        dispatch(showProcessing(LOAD));
        token()
            .then(token => {
                    getCurrentParticipants(token)
                        .then(data => {
                            if (data.error) {
                                dispatch(showNotificationModal(false, "Ошибка получения списка студентов"));
                                dispatch(hideProcessing());
                            } else {
                                dispatch(setParticipants(data));
                                dispatch(hideProcessing());
                            }
                        });
                }
            )
    }
};

