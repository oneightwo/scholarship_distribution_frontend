export const PROCESSING_SHOW = 'PROCESSING_SHOW';
export const PROCESSING_HIDE = 'PROCESSING_HIDE';


export const showProcessing = (text) => ({
    type: PROCESSING_SHOW,
    payload: {
        text,
        show: true
    }
});

export const hideProcessing = () => ({
    type: PROCESSING_SHOW,
    payload: {
        show: false
    }
});