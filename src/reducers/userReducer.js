import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
} from '../actions/actions.type';

const USER_INITIAL_STATE = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload };
    case SIGN_OUT_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
