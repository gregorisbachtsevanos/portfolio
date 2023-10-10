import { config } from '@/config';
import { EmailProps } from '@/types';

import { api } from './api';

const CONTACT_API = config.contactAPI;

export const contactApi = api.injectEndpoints({
  endpoints: (build) => ({
    postEmail: build.mutation({
      query: ({ subject, html, email }) => ({
        url: `${CONTACT_API}/api/email`,
        method: 'POST',
        body: { subject, html, email },
      }),
    }),
  }),
});

export const { usePostEmailMutation } = contactApi;
