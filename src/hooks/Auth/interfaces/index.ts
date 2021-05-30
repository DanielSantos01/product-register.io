/* eslint-disable no-unused-vars */
export interface User {
  _id: string;
  name: string;
  login: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role?: string;
}

export interface AuthContextData {
  isLoading: boolean;
  hasUserData: boolean
  userData: User;
  signIn: (data: AcessDataModel) => Promise<boolean>;
  signUp: (data: SignUpDataModel) => Promise<boolean>;
  update: (data: UpdateDataModel) => Promise<boolean>;
  checkExists: (login: string) => Promise<boolean>;
  logOut: () => Promise<void>;
}

export interface AuthStateData {
  isLoading: boolean;
  hasUserData: boolean;
  userData: User;
}

export interface AcessDataModel {
  login: string;
  password: string;
}

export interface SignUpDataModel {
  name: string;
  login: string;
  password: string;
  role?: string;
}

export interface UpdateDataModel {
  _id: string;
  role?: string;
  name?: string;
}

export type AuthActions =
  |{ type: 'set_user', user: User }
  |{ type: 'manage_flags', isLoading?: boolean; hasUserData?: boolean }
  |{ type: 'clear_user_data'};

export type AuthReducer =
  (state: AuthStateData, action: AuthActions) => AuthStateData;
