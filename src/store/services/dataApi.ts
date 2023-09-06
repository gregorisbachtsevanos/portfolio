import config from '@/config';
import { api } from './api/';
import { Project, UsersInfo } from '@/types';

const DATA_API = config.dataAPI;

export const dataApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsersInfo: build.query<UsersInfo, void>({
      query: () => ({
        url: `${DATA_API}/user_info`,
        method: 'GET',
      }),
    }),
    getProjects: build.query<Project[], void>({
      query: () => ({
        url: `${DATA_API}/projects`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUsersInfoQuery } = dataApi;
