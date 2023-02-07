import styles from './header.module.scss';
import mealsImage from '../../../../assets/images/meals.jpg';
import HeaderCartButton from './components/header-cart-button/header-cart-button';

/* eslint-disable-next-line */
export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <>
      <header className={styles['header']}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;
