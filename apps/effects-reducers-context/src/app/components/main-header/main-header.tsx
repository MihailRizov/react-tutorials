import styles from './main-header.module.scss';
import Navigation from './navigation/navigation';

export interface MainHeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const MainHeader = (props: MainHeaderProps) => {
  const { isAuthenticated, onLogout } = props;
  return (
    <header className={styles['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
