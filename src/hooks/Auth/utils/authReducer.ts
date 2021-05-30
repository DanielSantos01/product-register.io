import { AuthReducer, User } from '../interfaces';

export const authReducer: AuthReducer = (state, action) => {
  switch (action.type) {
    case 'manage_flags':
      return {
        userData: state.userData,
        isLoading: action.isLoading,
        hasUserData: action.hasUserData,
      };
    case 'set_user':
      return { ...state, userData: action.user };
    case 'remove_user':
      return {
        isLoading: false,
        hasUserData: false,
        userData: {} as User,
      };
    default:
      return state;
  }
};
