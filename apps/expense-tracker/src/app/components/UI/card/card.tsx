import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
  className: string;
}

export const Card = (props: CardProps) => {
  const { className, children } = props;
  const classes = `${styles['card']} + ${className}`;

  return <section className={classes}>{children}</section>;
};

export default Card;
