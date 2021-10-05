import { useAppSelector } from '../../redux/hooks';
import './Navigation.css';

export const Navigation = () => {
  const pageStore = useAppSelector((state) => state.page);

  return (
    <nav className="nav-container">
      <button className={pageStore === 'users' ? 'user-change' : 'button'}>
        Users
      </button>

      <button className={pageStore === 'privacy' ? 'user-change' : 'button'}>
        Privacy
      </button>
      <button className={pageStore === 'done' ? 'user-change' : 'button'}>
        Done
      </button>
    </nav>
  );
};
