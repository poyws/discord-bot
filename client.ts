import { Client, Intents } from 'discord.js';
import { ping } from './commands/ping';
import { hello } from './commands/hello';
import { userinfo } from './commands/userinfo';
import { avatar } from './commands/avatar';
import { serverinfo } from './commands/serverinfo';

export interface Command {
  name: string;
  execute: (message: any) => void;
}

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const commands: Command[] = [ping, hello, userinfo, avatar, serverinfo];

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!')) {
    const commandName = message.content.slice(1).split(' ')[0];
    const command = commands.find((cmd) => cmd.name === commandName);
    if (command) {
      command.execute(message);
    }
  }
});

export default client;
