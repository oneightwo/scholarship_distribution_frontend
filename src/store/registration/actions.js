export const REGISTRATION_CHANGE_FIELDS = 'REGISTRATION_CHANGE_FIELDS';

export const changeField = (id, value, required, isValid) => ({
    type: REGISTRATION_CHANGE_FIELDS,
    payload: {
        id,
        value,
        required,
        isValid
    }
});