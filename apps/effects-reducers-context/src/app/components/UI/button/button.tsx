import styles from './button.module.scss';

export interface ButtonProps {
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { className, onClick, disabled, children, type } = props;
  return (
    <button
      type={type || 'button'}
      className={`${styles['button']} ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
