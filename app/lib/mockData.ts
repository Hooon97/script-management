export type Persona = {
  id: number;
  title: string;
  description: string;
};

export const mockPersonas: Persona[] = [
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
