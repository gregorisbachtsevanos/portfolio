import { config } from '@/config';
import { Project } from '@/types';

import { api } from './api/';

const DATA_API = config.dataAPI;

export const projectApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<Project[], void>({
      query: () => ({
        url: `${DATA_API}/api/projects`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;
