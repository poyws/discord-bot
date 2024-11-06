import { Command } from '../client';

export const ping: Command = {
  name: 'ping',
  execute: async (message) => {
    await message.channel.send('Pong!');
  },
};
