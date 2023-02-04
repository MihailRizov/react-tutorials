import styles from './navigation.module.scss';

export interface NavigationProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navigation = (props: NavigationProps) => {
  const { isLoggedIn, onLogout } = props;
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
