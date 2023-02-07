import {
  ApplicationCommandOptionBase,
  ChatInputCommandInteraction,
} from 'discord.js';

export type Fire = {
  (interaction: ChatInputCommandInteraction): void | Promise<void>;
};

export interface Command {
  name: string;
  description: string;
  options?: CommandOption[];
  fire: Fire;
}

export interface CommandOption {
  name: string;
  description: string;
  required: boolean;
  type: ApplicationCommandOptionType;
}

declare namespace NodeJS {
  interface ProcessEnv {
    API_key: string;
  }
}
