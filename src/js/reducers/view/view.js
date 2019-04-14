import { GET_VIEW_SUCCESS, GET_VIEW } from '../../types/View';

const INITIAL_STATE = {
  loading: false,
  view: {},
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_VIEW:
      return Object.assign({}, state, { loading: true });
    case GET_VIEW_SUCCESS:
      return Object.assign({}, state, { loading: false, view: action.payload });
    default:
      return state;
  }
};

