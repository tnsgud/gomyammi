import axios from 'axios';
import { ApplicationCommandOptionType } from 'discord.js';
import qs from 'querystring';
import { Command } from '../../../type';
import { Search, QueryInput } from './type';

const search: Search = async (options) => {
  const { enginId, apiKey, keyword } = options;
  const baseUrl = 'https://www.googleapis.com/customsearch/v1?';
  const queryInput: QueryInput = {
    key: apiKey,
    cx: enginId,
    q: keyword,
    searchType: 'image',
  };

  console.log();
  const res = await axios.get(`${baseUrl}${qs.stringify(queryInput)}`);

  return res.data;
};

export const GoogleImageSearch: Command = {
  name: '이미지',
  description: 'google에서 image 검색',
  options: [
    {
      name: 'keyword',
      description: '검색할 단어',
      required: true,
      type: ApplicationCommandOptionType.String,
    },
  ],
  fire: async (interaction) => {
    const data = await search({
      apiKey: process.env.API_KEY ?? '',
      enginId: process.env.ENGIN_ID ?? '',
      keyword: interaction.options.getString('keyword') ?? '고양이',
    });

    const links = data.items.map((item) => item.link);

    interaction.reply(links.join('\n'));
  },
};
