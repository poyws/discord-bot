import { Client } from 'discord.js';

export const ready = (client: Client) => {
  client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
  });
};
