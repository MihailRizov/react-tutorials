import AvailableMeals from '../available-meals/available-meals';
import MealsSummary from '../meals-summary/meals-summary';
import styles from './meals.module.scss';

/* eslint-disable-next-line */
export interface MealsProps {}

const Meals = (props: MealsProps) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
