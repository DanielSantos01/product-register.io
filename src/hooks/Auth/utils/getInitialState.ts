import { AuthStateData, User } from '../interfaces';

export const getInitialState = (): AuthStateData => {
  const initialState: AuthStateData = {
    isLoading: false,
    hasUserData: false,
    userData: {} as User,
    userPosition: -1,
  };
  return initialState;
};
