/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
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
import { useSheets } from '../Sheets';
import { PossibleKeys } from '../Sheets/interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const initialState: AuthStateData = getInitialState();
  const [state, dispatch] = useReducer<AuthReducer>(authReducer, initialState);
  const {
    hasUserData, isLoading, userData, userPosition,
  } = state;
  const { write } = useSheets();

  const updateSpreadsheet = useCallback(async (user: User, position: number) => {
    const { name, login, role } = user;
    const value: string = `${name},${login},${role}`;
    await write({ position: position + 2, key: PossibleKeys.name, value });
  }, [write]);

  const checkLocalData = useCallback(() => {
    const data: string | null = window.localStorage.getItem(APP_CONSTANTS.LOCAL_USER_KEY);
    if (!data) return;
    const stored = JSON.parse(data);
    const [user, position] = stored;
    dispatch({ type: 'set_user', user, position });
    dispatch({ type: 'manage_flags', hasUserData: true });
  }, []);

  const setLocalData = useCallback((user: User, position: number) => {
    window.localStorage.setItem(
      APP_CONSTANTS.LOCAL_USER_KEY,
      JSON.stringify([user, position]),
    );
  }, []);

  const removeLocalData = useCallback(() => {
    window.localStorage.removeItem(APP_CONSTANTS.LOCAL_USER_KEY);
  }, []);

  const getUserPosition = useCallback(async (id: string) => {
    const url: string = `${mountUrl('/user/position')}?id=${id}`;
    const response: HttpHelperResponse<string> = await AppHttpHelper.get<string>({ url });
    const hasSucess: boolean = response.statusCode === HttpStatusCode.OK;
    return hasSucess ? Number(response.body) : -1;
  }, []);

  const handleManageData = useCallback(async (user: User, position: number) => {
    dispatch({ type: 'set_user', user, position });
    setLocalData(user, position);
  }, []);

  const handleSignIn = useCallback(async (data: HttpHelperResponse<User[]>) => {
    const { body, statusCode } = data;
    const hasError: boolean = statusCode !== HttpStatusCode.OK;
    const user: User = body[0];
    const hasUserData: boolean = !!user;

    if (hasError || !hasUserData) return false;
    const userPosition: number = await getUserPosition(user._id);
    handleManageData(user, userPosition);
    return true;
  }, [setLocalData, getUserPosition, handleManageData]);

  const signIn = useCallback(async (data: AcessDataModel) => {
    dispatch({ type: 'manage_flags', isLoading: true });
    const url: string = mountUrl('user/acess');
    const signInResponse: HttpHelperResponse<User[]> = await AppHttpHelper
      .post<User[]>({ url, body: data });

    const hasSuccess: boolean = await handleSignIn(signInResponse);
    dispatch({ type: 'manage_flags', isLoading: false, hasUserData: hasSuccess });
    return hasSuccess;
  }, [handleSignIn]);

  const signUp = useCallback(async (data: SignUpDataModel) => {
    dispatch({ type: 'manage_flags', isLoading: true });
    const url: string = mountUrl('user/create');
    const signUpResponse: HttpHelperResponse<User> = await AppHttpHelper
      .post<User>({ url, body: data });
    dispatch({ type: 'manage_flags', isLoading: false });

    const user: User = signUpResponse.body;
    const userPosition: number = await getUserPosition(user._id);
    const hasSuccess: boolean =
      signUpResponse.statusCode === HttpStatusCode.OK && userPosition !== -1;
    if (!hasSuccess) return false;
    await updateSpreadsheet(signUpResponse.body, userPosition);
    return true;
  }, [getUserPosition, updateSpreadsheet]);

  const update = useCallback(async (data: UpdateDataModel) => {
    const { _id, ...rest } = data;
    dispatch({ type: 'manage_flags', isLoading: true });
    const url: string = mountUrl('user');
    const updateResponse: HttpHelperResponse<User> = await AppHttpHelper
      .patch<User>({ url, body: { id: _id, ...rest } });
    dispatch({ type: 'manage_flags', isLoading: false });

    const wasUserUpdated: boolean = updateResponse.statusCode === HttpStatusCode.OK;
    if (!wasUserUpdated) return false;
    dispatch({ type: 'set_user', user: updateResponse.body, position: userPosition });
    await updateSpreadsheet(updateResponse.body, userPosition);
    return true;
  }, [updateSpreadsheet, userPosition]);

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
    removeLocalData();
  }, [removeLocalData]);

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
        position: userPosition,
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
