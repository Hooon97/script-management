
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/">AI Scripts</Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/persona">Persona</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/create">Create New</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
