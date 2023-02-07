import Input from '../../ui/input/input';
import styles from './meal-item-form.module.scss';

export interface MealItemFormProps {
  id: string;
}

const MealItemForm = (props: MealItemFormProps) => {
  const { id } = props;
  const amountId = `amount_${id}`;
  return (
    <form className={styles['form']}>
      <Input
        label='Amount'
        input={{
          id: amountId,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
