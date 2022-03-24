import React from 'react';
import { renderApollo, cleanup, waitForElement } from '../../utils/test-utils';
import UserCard from '../user-card';

const mockUserCardData = {
    phone: "041-694-6856",
    name: {
      first: "Aymen-Card",
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

describe('User Card', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders User Card', async () => {
    const mocks = [];
    const { getByText } = await renderApollo(
      <UserCard user={mockUserCardData} />,
      {
        mocks,
        resolvers: {},
        addTypename: false,
      }
    );
    await waitForElement(() => getByText(/Aymen-Card/i));
  });
});
