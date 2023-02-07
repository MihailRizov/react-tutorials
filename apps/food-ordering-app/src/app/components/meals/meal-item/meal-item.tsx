import MealItemForm from '../meal-item-form/meal-item-form';
import styles from './meal-item.module.scss';

export interface MealItemData {
  id: string;
  name: string;
  description: string;
  price: number;
}

/* eslint-disable-next-line */
export interface MealItemProps extends MealItemData {}

const MealItem = (props: MealItemProps) => {
  const { id, name, description, price } = props;
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={styles['meal']}>
      <div>
        <h3>{name}</h3>
        <div className={styles['description']}>{description}</div>
        <div className={styles['price']}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
