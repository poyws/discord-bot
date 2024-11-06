import { Command } from '../client';

export const clear: Command = {
  name: 'clear',
  execute: async (message) => {
    if (!message.member?.permissions.has('MANAGE_MESSAGES')) {
      return message.channel.send('Você não tem permissão para deletar mensagens.');
    }
    const args = message.content.split(' ');
    const amount = parseInt(args[1]);
    if (isNaN(amount)) return message.channel.send('Por favor, especifique o número de mensagens para deletar.');
    await message.channel.bulkDelete(amount, true);
    message.channel.send(`${amount} mensagens foram deletadas.`);
  },
};
