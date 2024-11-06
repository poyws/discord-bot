import { Command } from '../client';

export const slap: Command = {
  name: 'slap',
  execute: async (message) => {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send('Who do you want to slap?');
    await message.channel.send(`${message.author.username} slapped ${user.username}!`);
  },
};
