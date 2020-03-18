export const NOTIFICATION_MODAL_SHOW = 'NOTIFICATION_MODAL_SHOW';
export const NOTIFICATION_MODAL_HIDE = 'NOTIFICATION_MODAL_HIDE';

export const showNotificationModal = (typeIsOk, text) => ({
    type:NOTIFICATION_MODAL_SHOW,
    payload: {
        show: true,
        text,
        typeIsOk
    }
});

export const hideNotificationModal = () => ({
    type: NOTIFICATION_MODAL_HIDE,
    payload: {
        show: false
    }
});