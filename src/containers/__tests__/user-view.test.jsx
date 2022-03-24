import React from 'react';
import { renderApollo, cleanup, waitForElement } from '../../utils/test-utils';
import UserView from '../user-view';

const mockUserViewData = {
    phone: "041-694-6856",
    name: {
      first: "Aymen-View",
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

describe('User View', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders User View', async () => {
    const mocks = [];
    const { getByText } = await renderApollo(
      <UserView user={mockUserViewData} />,
      {
        mocks,
        resolvers: {},
        addTypename: false,
      }
    );
    await waitForElement(() => getByText(/Aymen-View/i));
  });
});
