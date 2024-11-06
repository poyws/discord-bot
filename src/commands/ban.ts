import { Command } from '../client';

export const ban: Command = {
  name: 'ban',
  execute: async (message) => {
    if (!message.member?.permissions.has('BAN_MEMBERS')) {
      return message.channel.send('Você não tem permissão para banir usuários.');
    }
    const member = message.mentions.members?.first();
    if (!member) return message.channel.send('Por favor, mencione um usuário para banir!');
    await member.ban();
    message.channel.send(`${member.user.tag} foi banido.`);
  },
};
