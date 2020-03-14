export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

export const showNotificationModal = (typeIsOk, text) => ({
    type:MODAL_SHOW,
    payload: {
        show: true,
        text,
        typeIsOk
    }
});

export const hideNotificationModal = () => ({
    type: MODAL_HIDE,
    payload: {
        show: false
    }
});