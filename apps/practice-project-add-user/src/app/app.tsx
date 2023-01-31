// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.scss';
import AddUser, { User } from './components/users/add-user/add-user';
import UsersList from './components/users/users-list/users-list';

export function App() {
  const [userList, setUserList] = useState<User[]>([]);

  const addUserHandler = (user: User): void => {
    const userToBeAdded = { ...user, key: Date.now() };
    setUserList((prevUserList) => [...prevUserList, userToBeAdded]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
