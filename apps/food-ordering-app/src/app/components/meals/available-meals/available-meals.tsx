import Card from '../../ui/card/card';
import MealItem, { MealItemData } from '../meal-item/meal-item';
import styles from './available-meals.module.scss';

const DUMMY_MEALS: MealItemData[] = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

/* eslint-disable-next-line */
export interface AvailableMealsProps {}

const AvailableMeals = (props: AvailableMealsProps) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem {...meal} key={meal.id} />
  ));

  return (
    <section className={styles['meals']}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
