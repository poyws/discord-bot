import { Command } from '../client';

export const unban: Command = {
  name: 'unban',
  execute: async (message) => {
    if (!message.member?.permissions.has('BAN_MEMBERS')) {
      return message.channel.send('Você não tem permissão para desbanir usuários.');
    }
    const userId = message.content.split(' ')[1];
    if (!userId) return message.channel.send('Por favor, forneça o ID do usuário para desbanir!');
    const bannedUser = await message.guild?.members.unban(userId);
    message.channel.send(`${bannedUser?.tag} foi desbanido.`);
  },
};
