import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles';
import Pages from './pages/index.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://team-app-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <GlobalStyles />
  <Pages />
</ApolloProvider>,
document.getElementById('root')
)
