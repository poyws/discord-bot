import { Command } from '../client';

export const userinfo: Command = {
  name: 'userinfo',
  execute: async (message) => {
    const user = message.mentions.users.first() || message.author;
    const member = message.guild?.members.cache.get(user.id);
    await message.channel.send(
      `User info for ${user.username}:\nJoined at: ${member?.joinedAt}\nRoles: ${member?.roles.cache.map(role => role.name).join(', ')}`
    );
  },
};
