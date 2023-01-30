import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { children, type, onClick } = props;
  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      type={type || 'button'}
      className={styles['button']}
      onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
