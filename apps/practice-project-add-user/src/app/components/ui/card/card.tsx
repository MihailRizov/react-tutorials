import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const { children, className: propsClasses } = props;
  return <div className={`${styles['card']} ${propsClasses}`}>{children}</div>;
};

export default Card;
