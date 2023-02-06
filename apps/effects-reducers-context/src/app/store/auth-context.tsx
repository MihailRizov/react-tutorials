import React, { useEffect, useState } from 'react';

export interface AuthState {
  isLoggedIn: boolean;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
}

export interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthState | null>(null);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === '1';
    if (isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = (email: string, password: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
