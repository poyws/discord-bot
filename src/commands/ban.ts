import { Command } from '../client';

export const ban: Command = {
  name: 'ban',
  execute: async (message) => {
    const member = message.mentions.members?.first();
    if (!member) return message.channel.send('Please mention a user to ban!');
    await member.ban();
    message.channel.send(`${member.user.tag} has been banned.`);
  },
};
