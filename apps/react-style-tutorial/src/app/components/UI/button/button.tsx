import styles from './button.module.scss';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children: string;
}

const Button = (props: ButtonProps) => {
  const { type, onClick, children } = props;
  return (
    <button type={type} className={styles['button']} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
