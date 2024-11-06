import { Command } from '../client';

export const serverinfo: Command = {
  name: 'serverinfo',
  execute: async (message) => {
    const guild = message.guild;
    await message.channel.send(
      `Server info for ${guild?.name}:\nTotal members: ${guild?.memberCount}\nCreated at: ${guild?.createdAt}`
    );
  },
};
