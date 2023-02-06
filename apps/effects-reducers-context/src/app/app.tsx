// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import MainHeader from './components/main-header/main-header';
import Login from './components/login/login';
import Home from './components/home/home';
import { useContext } from 'react';
import AuthContext, { AuthState } from './store/auth-context';

export function App() {
  const { isLoggedIn } = useContext(AuthContext) as AuthState;
  return (
    <>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
