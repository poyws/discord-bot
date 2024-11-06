import { Client, Intents } from 'discord.js';
import { ping } from './commands/ping';
import { hello } from './commands/hello';
import { userinfo } from './commands/userinfo';
import { avatar } from './commands/avatar';
import { serverinfo } from './commands/serverinfo';
import { ban } from './commands/ban';
import { kick } from './commands/kick';
import { mute } from './commands/mute';
import { clear } from './commands/clear';
import { unban } from './commands/unban';
import { slap } from './commands/slap';
import { joke } from './commands/joke';
import { meme } from './commands/meme';
import { coinflip } from './commands/coinflip';
import { roll } from './commands/roll';

export interface Command {
  name: string;
  execute: (message: any) => void;
}

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const commands: Command[] = [
  ping,
  hello,
  userinfo,
  avatar,
  serverinfo,
  ban,
  kick,
  mute,
  clear,
  unban,
  slap,
  joke,
  meme,
  coinflip,
  roll,
];

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!')) {
    const commandName = message.content.slice(1).split(' ')[0];
    const command = commands.find((cmd) => cmd.name === commandName);
    if (command) {
      command.execute(message);
    }
  }
});

export default client;
