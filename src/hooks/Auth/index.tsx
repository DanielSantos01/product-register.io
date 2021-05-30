import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react';

import { AuthContextData, AuthReducer, AuthStateData } from './interfaces';
import { authReducer, getInitialState } from './utils';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const initialState: AuthStateData = getInitialState();
  const [state, dispatch] = useReducer<AuthReducer>(authReducer, initialState);
  const { hasUserData, isLoading, userData } = state;

  const signIn = useCallback(async () => {}, []);
  const signUp = useCallback(async () => true, []);
  const update = useCallback(async () => {}, []);
  const logOut = useCallback(async () => {}, []);

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
