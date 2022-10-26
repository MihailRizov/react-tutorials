import styles from './course-goal-item.module.scss';

/* eslint-disable-next-line */
export interface CourseGoalItemProps {
  onDelete: (id: string) => void;
  id: string;
  children: JSX.Element | JSX.Element[] | string;
}

const CourseGoalItem = (props: CourseGoalItemProps) => {
  const { id, onDelete, children } = props;
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };
  return (
    <li className={styles['goal-item']} onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
