import * as types from '../constants';

const initialState = {
  username: '',
  passwoord: '',
  authenticated: false,
  isLoading: false,
  error: false,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.INPUT: {
      return {
        ...state,
        [action.el]: action.input,
      };
    }
    case types.LOGOUT:
    case types.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        authenticated: true,
        error: false,
        username: '',
        password: '',
      };
    case types.VERIFIED_SUCCESS:
      return {
        ...state,
        username: action.data.user,
        authenticated: true,
        error: false,
      }
    case types.LOGOUT_SUCCESS:
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        error: action.error,
        username: '',
        password: '',
      };
    case types.REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        authenticated: true,
        error: false,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        error: action.error,
      };
    default:
      return state;
  }
}
