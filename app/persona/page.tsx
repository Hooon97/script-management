import styles from './Persona.module.css';
import { mockPersonas } from '../lib/mockData'; // Using relative path for safety

const PersonaPage = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Manage Your Personas</h1>
        <p className={styles.subtitle}>
          Create, view, and manage the character personas used in your AI scripts.
        </p>
      </header>
      <main className={styles.gridContainer}>
        {mockPersonas.map((persona) => (
          <div key={persona.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{persona.title}</h2>
            <p className={styles.cardDescription}>{persona.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default PersonaPage;
