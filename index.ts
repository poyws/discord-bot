import client from './client';
import { ready } from './events/ready';
import { messageCreate } from './events/messageCreate';

client.login('token do bot');

ready(client);
messageCreate(client);
