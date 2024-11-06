import { Command } from '../client';

export const hello: Command = {
  name: 'hello',
  execute: async (message) => {
    await message.channel.send(`Hello, ${message.author.username}!`);
  },
};
