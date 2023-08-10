import { EmailProps } from '@/types';
import { api } from './api';
import config from '@/config';

const CONTACT_API = config.contactAPI;

export const contactApi = api.injectEndpoints({
  endpoints: (build) => ({
    postEmail: build.mutation({
      query: ({ name, email, content }) => ({
        url: `${CONTACT_API}`,
        method: 'POST',
        body: { name, email, content },
      }),
    }),
  }),
});

export const { usePostEmailMutation } = contactApi;
