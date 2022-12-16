import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import { getCommands, addCommands } from './commands/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  addCommands();
  console.log('Successfully add application commands');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  getCommands().forEach((command) => {
    if (interaction.commandName === command.name) {
      command.fire(interaction);
    }
  });
});

client.login(process.env.TOKEN);
