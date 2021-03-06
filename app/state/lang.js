import ls from 'local-storage';

export const CHANGE_LANGUAGE = 'notagency/language/change';

export default function reducer(state = {
    code: 'en'
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


export const changeLanguage = lang => {
    ls('language', lang);
    return { type: CHANGE_LANGUAGE, payload: lang };
};
