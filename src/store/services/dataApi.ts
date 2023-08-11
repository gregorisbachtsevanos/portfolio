import config from '@/config';
import { api } from './api/';
import { UsersInfo } from '@/types';

const DATA_API = config.dataAPI;

export const dataApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsersInfo: build.query<UsersInfo, void>({
      query: () => ({
        url: `${DATA_API}/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUsersInfoQuery } = dataApi;
