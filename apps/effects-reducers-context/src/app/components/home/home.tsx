import Card from '../UI/card/card';
import styles from './home.module.scss';
// eslint-disable-next-line
export interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <Card className={styles['home']}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
