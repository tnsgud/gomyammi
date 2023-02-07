import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import { Command } from '../../type';
import { GoogleImageSearch } from './google_image_search';
import { LightNovelSearch } from './light_novel_search';

const rest = new REST({ version: '10' }).setToken(`${process.env.TOKEN}`);
const commands: Command[] = [GoogleImageSearch, LightNovelSearch];

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
