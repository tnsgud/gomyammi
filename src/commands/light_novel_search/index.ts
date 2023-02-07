import axios from 'axios';
import { ApplicationCommandOptionType } from 'discord.js';
import { Command } from '../../../type';
import { NovelSearchOption, QueryResult, Search } from './type';

const search: Search = async (keyword) => {
  const { TTB_KEY } = process.env;
  const baseUrl = 'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?';
  const option: NovelSearchOption = {
    Query: keyword,
    ttbkey: TTB_KEY ?? '',
    output: 'js',
    Cover: 'Big',
  };

  const res = await axios.get<any, QueryResult>(baseUrl, {
    data: option,
  });

  console.log('🚀 ~ file: index.ts:17 ~ constsearch:Search= ~ res', res);

  return res.item.map((obj) => obj.title);
};

export const LightNovelSearch: Command = {
  name: '라노벨',
  description: '라이트 노벨 검색',
  options: [
    {
      name: 'keyword',
      description: '검색할 단어',
      required: true,
      type: ApplicationCommandOptionType.String,
    },
  ],
  fire: async (interaction) => {
    const data = await search(
      interaction.options.getString('keyword') ?? '고양이'
    );

    interaction.reply(data.join('\n'));
  },
};
