import React, {
  createContext,
  useContext,
  useCallback,
  useReducer,
  useEffect,
} from 'react';

import AppHttpHelper from '@services/httpService';
import { HttpHelperResponse } from '@/modules/http/data/protocols';
import { APP_CONSTANTS } from '../../constants';
import { HttpStatusCode } from '../../modules/http/domain/interfaces';
import { authReducer, getInitialState, mountUrl } from './utils';
import {
  AcessDataModel,
  AuthContextData,
  AuthReducer,
  AuthStateData,
  SignUpDataModel,
  UpdateDataModel,
  User,
} from './interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const initialState: AuthStateData = getInitialState();
  const [state, dispatch] = useReducer<AuthReducer>(authReducer, initialState);
  const { hasUserData, isLoading, userData } = state;

  const checkLocalData = useCallback(async () => {
    const data: string | null = window.localStorage.getItem(APP_CONSTANTS.LOCAL_USER_KEY);
    if (data) {
      const user: User = JSON.parse(data);
      dispatch({ type: 'set_user', user });
      dispatch({ type: 'manage_flags', hasUserData: true });
    }
  }, []);

  const setLocalData = useCallback((user: User) => {
    window.localStorage.setItem(
      APP_CONSTANTS.LOCAL_USER_KEY,
      JSON.stringify(user),
    );
  }, []);

  const handleSignIn = useCallback((data: HttpHelperResponse<User[]>) => {
    const { body, statusCode } = data;
    const hasError: boolean = statusCode !== HttpStatusCode.OK;
    const user: User = body[0];
    const hasUserData: boolean = !!user;

    if (hasError || !hasUserData) return false;
    dispatch({ type: 'set_user', user });
    setLocalData(user);
    return true;
  }, [setLocalData]);

  const signIn = useCallback(async (data: AcessDataModel) => {
    dispatch({ type: 'manage_flags', isLoading: true });
    const url: string = mountUrl('user/acess');
    const signInResponse: HttpHelperResponse<User[]> = await AppHttpHelper
      .post<User[]>({ url, body: data });

    const hasSuccess: boolean = handleSignIn(signInResponse);
    dispatch({ type: 'manage_flags', isLoading: false, hasUserData: hasSuccess });
    return hasSuccess;
  }, []);

  const signUp = useCallback(async (data: SignUpDataModel) => {
    dispatch({ type: 'manage_flags', isLoading: true });
    const url: string = mountUrl('user/create');
    const signUpResponse: HttpHelperResponse<User> = await AppHttpHelper
      .post<User>({ url, body: data });

    dispatch({ type: 'manage_flags', isLoading: false });
    const wasUserCreated: boolean = signUpResponse.statusCode === HttpStatusCode.OK;
    return wasUserCreated;
  }, []);

  const update = useCallback(async (data: UpdateDataModel) => {
    const { _id, ...rest } = data;
    dispatch({ type: 'manage_flags', isLoading: true });
    const url: string = mountUrl('user');
    const updateResponse: HttpHelperResponse<User> = await AppHttpHelper
      .patch<User>({ url, body: { id: _id, ...rest } });

    dispatch({ type: 'manage_flags', isLoading: false });
    const wasUserUpdated: boolean = updateResponse.statusCode === HttpStatusCode.OK;
    if (wasUserUpdated) dispatch({ type: 'set_user', user: updateResponse.body });
    return wasUserUpdated;
  }, []);

  const checkExists = useCallback(async (login: string) => {
    dispatch({ type: 'manage_flags', isLoading: true });
    const url: string = mountUrl('user/exists');
    const existenceResponse: HttpHelperResponse<boolean> = await AppHttpHelper
      .post<boolean>({ url, body: { login } });

    dispatch({ type: 'manage_flags', isLoading: false });
    const exists: boolean = !!existenceResponse.body;
    return exists;
  }, []);

  const logOut = useCallback(async () => {
    dispatch({ type: 'clear_user_data' });
    dispatch({ type: 'manage_flags', isLoading: false, hasUserData: false });
    window.localStorage.removeItem(APP_CONSTANTS.LOCAL_USER_KEY);
  }, []);

  useEffect(() => {
    checkLocalData();
  }, [checkLocalData]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        hasUserData,
        userData,
        logOut,
        signIn,
        signUp,
        update,
        checkExists,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context: AuthContextData = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whithin an AuthProvider');
  }

  return context;
}
