import styles from './main-header.module.scss';
import Navigation from './navigation/navigation';
// eslint-disable-next-line
export interface MainHeaderProps {}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className={styles['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
