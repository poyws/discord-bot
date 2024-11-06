import { Command } from '../client';

export const roll: Command = {
  name: 'roll',
  execute: async (message) => {
    const max = parseInt(message.content.split(' ')[1]) || 6;
    const rollResult = Math.floor(Math.random() * max) + 1;
    await message.channel.send(`You rolled a ${rollResult}`);
  },
};
