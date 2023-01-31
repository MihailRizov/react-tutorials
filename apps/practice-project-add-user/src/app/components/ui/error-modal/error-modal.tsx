import Button from '../button/button';
import Card from '../card/card';
import styles from './error-modal.module.scss';

export interface ErrorModalProps {
  title: string;
  message: string;
  onAction?: () => void;
}

const ErrorModal = (props: ErrorModalProps) => {
  const { title, message, onAction } = props;
  const clickHandler = () => {
    if (onAction) {
      onAction();
    }
  };

  return (
    <>
      <div className={styles['backdrop']} onClick={clickHandler}></div>
      <Card className={styles['modal']}>
        <header className={styles['header']}>
          <h2>{title}</h2>
        </header>
        <div className={styles['content']}>
          <p>{message}</p>
        </div>
        <footer className={styles['actions']}>
          <Button onClick={clickHandler}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
