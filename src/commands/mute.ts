import { Command } from '../client';

export const mute: Command = {
  name: 'mute',
  execute: async (message) => {
    if (!message.member?.permissions.has('MUTE_MEMBERS')) {
      return message.channel.send('Você não tem permissão para mutar usuários.');
    }
    const member = message.mentions.members?.first();
    if (!member) return message.channel.send('Por favor, mencione um usuário para mutar!');
    await member.voice.setMute(true);
    message.channel.send(`${member.user.tag} foi mutado.`);
  },
};
