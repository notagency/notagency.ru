export const GLOBALS_SET = 'globals/set';

export default function reducer(state = {
  year: (new Date()).getFullYear()
}, action) {
  switch (action.type) {
    case GLOBALS_SET:
      return action.payload;
    default:
      return state;
  }
}

export const globalsSet = (data) => {
  return {type: GLOBALS_SET, payload: {data}};
};