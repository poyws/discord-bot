import { Command } from '../client';

export const kick: Command = {
  name: 'kick',
  execute: async (message) => {
    if (!message.member?.permissions.has('KICK_MEMBERS')) {
      return message.channel.send('Você não tem permissão para expulsar usuários.');
    }
    const member = message.mentions.members?.first();
    if (!member) return message.channel.send('Por favor, mencione um usuário para expulsar!');
    await member.kick();
    message.channel.send(`${member.user.tag} foi expulso.`);
  },
};
