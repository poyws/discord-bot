import { Command } from '../client';

export const coinflip: Command = {
  name: 'coinflip',
  execute: async (message) => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    await message.channel.send(`The coin landed on: ${result}`);
  },
};
