import { useContext } from 'react';
import AuthContext, { AuthState } from '../../../store/auth-context';
import styles from './navigation.module.scss';
// eslint-disable-next-line
export interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  const { isLoggedIn, onLogout } = useContext(AuthContext) as AuthState;
  return (
    <nav className={styles['nav']}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
