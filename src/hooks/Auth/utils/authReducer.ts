import { AuthReducer, User } from '../interfaces';

export const authReducer: AuthReducer = (state, action) => {
  switch (action.type) {
    case 'manage_flags':
      return {
        ...state,
        ...action,
      };
    case 'set_user':
      return { ...state, userData: action.user, userPosition: action.position };
    case 'clear_user_data':
      return {
        isLoading: false,
        hasUserData: false,
        userData: {} as User,
        userPosition: -1,
      };
    default:
      return state;
  }
};
