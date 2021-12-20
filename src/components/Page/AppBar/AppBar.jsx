import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          HomePage
        </NavLink>

        <NavLink
          to="/movies"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          MoviesPage
        </NavLink>
      </nav>
    </header>
  );
}

// const Navigation = () => (
//   <nav>
//     <NavLink
//       to="/"
//       exact
//       className={styles.link}
//       activeClassName={styles.activeLink}
//     >
//       HomePage
//     </NavLink>

//     <NavLink
//       to="/movies"
//       className={styles.link}
//       activeClassName={styles.activeLink}
//     >
//       MoviesPage
//     </NavLink>
//   </nav>
// );
