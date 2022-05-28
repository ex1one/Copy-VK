import { EAuthActionTypes, IAuthState, TAuthActions } from './types';

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export default function authReducer(state = initialState, action: TAuthActions) {
  switch (action.type) {
    case EAuthActionTypes.SET_USER:
      return { ...state, isAuth: action.payload };
    case EAuthActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case EAuthActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
