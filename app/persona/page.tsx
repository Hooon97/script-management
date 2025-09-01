import styles from './Persona.module.css';

// Mock Persona Data
const mockPersonas = [
  {
    id: 1,
    title: 'Sassy Hamster Sidekick',
    description: 'A tiny, witty hamster who gives sarcastic advice. Thinks he is the main character. Loves sunflower seeds.',
  },
  {
    id: 2,
    title: 'Wise Old Tree',
    description: 'An ancient, talking tree in a mystical forest. Speaks in riddles and offers cryptic wisdom. Has seen civilizations rise and fall.',
  },
  {
    id: 3,
    title: 'Cyberpunk Detective',
    description: 'A grizzled detective in a neon-drenched, dystopian city. Cynical but with a hidden heart of gold. Navigates the high-tech underworld.',
  },
  {
    id: 4,
    title: 'Cheerful Barista',
    description: 'An overly enthusiastic barista who remembers every customer\'s order and life story. Believes coffee can solve all problems.',
  },
  {
    id: 5,
    title: 'Space Pirate Captain',
    description: 'A charismatic and ruthless captain of a notorious pirate crew. Sails the cosmic seas looking for treasure and adventure.',
  },
  {
    id: 6,
    title: 'Anxious Robot',
    description: 'A domestic service robot who is perpetually worried about everything, from dust bunnies to the heat death of the universe.',
  },
];

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
