// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Header from './components/layout/header/header';
import Meals from './components/meals/meals/meals';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
