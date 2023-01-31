import Card from '../../ui/card/card';
import { User } from '../add-user/add-user';
import styles from './users-list.module.scss';

/* eslint-disable-next-line */
export interface UsersListProps {
  users: User[];
}

const UsersList = (props: UsersListProps) => {
  const { users } = props;
  return (
    <>
      {users.length && (
        <Card className={styles['users']}>
          <ul>
            {users.map((user: User) => (
              <li key={user.key}>
                {user.username} ({user.age} years old)
              </li>
            ))}
          </ul>
        </Card>
      )}
    </>
  );
};

export default UsersList;
