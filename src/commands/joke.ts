import { Command } from '../client';

export const joke: Command = {
  name: 'joke',
  execute: async (message) => {
    const jokes = [
      'Why don’t skeletons fight each other? They don’t have the guts.',
      'I told my wife she was drawing her eyebrows too high. She looked surprised.',
      'Why don’t programmers like nature? It has too many bugs.'
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    await message.channel.send(randomJoke);
  },
};
