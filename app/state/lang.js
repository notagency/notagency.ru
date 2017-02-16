import ls from 'local-storage';

export const CHANGE_LANGUAGE = 'language/change';

export default function reducer(state = {
    code: ls('language') || 'en'
}, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                code: action.payload
            };
        default:
            return state;
    }
}

export const changeLanguage = (dispatch, lang) => {
    ls('language', lang);
    dispatch({ type: CHANGE_LANGUAGE, payload: lang });
};