import CartIcon from '../../../../cart/cart-icon/cart-icon';
import styles from './header-cart-button.module.scss';

/* eslint-disable-next-line */
export interface HeaderCartButtonProps {}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  return (
    <button className={styles['button']}>
      <span className={styles['icon']}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles['badge']}>3</span>
    </button>
  );
};

export default HeaderCartButton;
