import { Command } from '../client';

export const kick: Command = {
  name: 'kick',
  execute: async (message) => {
    const member = message.mentions.members?.first();
    if (!member) return message.channel.send('Please mention a user to kick!');
    await member.kick();
    message.channel.send(`${member.user.tag} has been kicked.`);
  },
};
