import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import { ApolloProvider, ApolloClient } from '@apollo/client'
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import customLink from './settings/app/apollo-link';
import customCache from './settings/app/apollo-cache';

//apollo client setup
const client = new ApolloClient({
  link: customLink,
  cache: customCache,
})

//redux setup
const store = configureStore()

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
