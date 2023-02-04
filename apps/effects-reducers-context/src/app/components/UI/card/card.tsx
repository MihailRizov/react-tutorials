import styles from './card.module.scss';

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { className, children } = props;
  return <div className={`${styles['card']} ${className}`}>{children}</div>;
};

export default Card;
