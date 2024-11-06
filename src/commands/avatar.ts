import { Command } from '../client';

export const avatar: Command = {
  name: 'avatar',
  execute: async (message) => {
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(user.displayAvatarURL());
  },
};
