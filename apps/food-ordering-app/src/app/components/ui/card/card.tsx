import styles from './card.module.scss';

export interface CardProps {
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { children } = props;
  return <div className={styles['card']}>{children}</div>;
};

export default Card;
