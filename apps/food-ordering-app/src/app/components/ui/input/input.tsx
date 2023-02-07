import styles from './input.module.scss';

export interface InputProps {
  label: string;
  input: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const Input = (props: InputProps) => {
  const { label, input } = props;
  const { id } = input;
  return (
    <div className={styles['input']}>
      <label htmlFor={id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
