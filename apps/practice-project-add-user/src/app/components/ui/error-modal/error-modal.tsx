import Button from '../button/button';
import Card from '../card/card';
import styles from './error-modal.module.scss';
import ReactDOM from 'react-dom';

export interface ErrorModalProps {
  title: string;
  message: string;
  onAction?: () => void;
}

/* eslint-disable-next-line */
interface BackdropProps extends Pick<ErrorModalProps, 'onAction'> {}
/* eslint-disable-next-line */
interface ModalOverlayProps extends ErrorModalProps {}

const Backdrop = (props: BackdropProps) => (
  <div className={styles['backdrop']} onClick={props.onAction}></div>
);

const ModalOverlay = (props: ModalOverlayProps) => {
  const { title, message, onAction } = props;
  const clickHandler = () => {
    if (onAction) {
      onAction();
    }
  };

  return (
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
  );
};

const ErrorModal = (props: ErrorModalProps) => {
  const { onAction } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onAction={onAction} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default ErrorModal;
