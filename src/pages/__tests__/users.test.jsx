import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { InMemoryCache } from '@apollo/client';
import { renderApollo, cleanup, waitForElement } from '../../utils/test-utils';
import Users, { USERS } from '../users';

const mockUser = {
    phone: "041-694-6856",
    name: {
      first: "Aymen-Test",
      last: "Mills"
    },
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/28.jpg"
    },
    location: {
      country: "Ireland"
    },
    email: "isaiah.mills@example.com"
};

describe('Users Page', () => {
  afterEach(cleanup);
  const cache = new InMemoryCache({ addTypename: false });

  it('renders Users', async () => {
    const mocks = [
      {
        request: { query: USERS },
        result: {
          data: {
            usersForHome: [mockUser],
          },
        },
      },
    ];

    const { getByText } = await renderApollo(<Users />, {
      mocks,
      cache,
    });

    await waitForElement(() => getByText(/Aymen-Test/i));
  });
});
