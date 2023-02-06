import React, {
  HTMLInputTypeAttribute,
  useImperativeHandle,
  useRef,
} from 'react';
import styles from './input.module.scss';

/* eslint-disable-next-line */
export interface InputProps {
  htmlFor: string;
  label: string;
  type: HTMLInputTypeAttribute;
  id?: string;
  value: string | number;
  isValid: boolean | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler;
}

const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<unknown> | undefined) => {
    const { htmlFor, label, type, id, value, onBlur, onChange, isValid } =
      props;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const activate = () => inputRef.current?.focus();

    useImperativeHandle(ref, () => ({
      focus: activate,
    }));

    return (
      <div
        className={`${styles['control']} ${
          isValid === false ? styles['invalid'] : ''
        }`}>
        <label htmlFor={htmlFor}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
