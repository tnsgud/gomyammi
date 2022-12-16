import { REST, Routes } from 'discord.js';
import { Command } from '../..';
import { GoogleImageSearch } from './google_image_search';

const rest = new REST({ version: '10' }).setToken(`${process.env.TOKEN}`);
const commands: Command[] = [GoogleImageSearch];

export const addCommands = async () => {
  try {
    await rest.put(Routes.applicationCommands(`${process.env.CLIENT_ID}`), {
      body: commands,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCommands = () => [...commands];
