import { Client } from 'discord.js';

export const messageCreate = (client: Client) => {
  client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
      message.channel.send('Pong!');
    }
  });
};
