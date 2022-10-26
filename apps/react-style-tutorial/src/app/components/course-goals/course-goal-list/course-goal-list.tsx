import CourseGoalItem from '../course-goal-item/course-goal-item';
import styles from './course-goal-list.module.scss';

interface GoalItem {
  id: string;
  text: string;
}

export interface CourseGoalListProps {
  items: GoalItem[];
  onDeleteItem: (goalId: string) => void;
}

const CourseGoalList = (props: CourseGoalListProps) => {
  const { items, onDeleteItem } = props;
  return (
    <ul className={styles['goal-list']}>
      {items.map((goal: GoalItem) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
