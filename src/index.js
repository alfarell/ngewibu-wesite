import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import configureStore from './redux/store';
import { Provider } from 'react-redux';

//apollo client setup
const link = new HttpLink({
  uri: process.env.REACT_APP_BASE_URL,
  method: "POST"
})
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Page: {
          keyArgs: (_, { variables, field }) => {
            console.log(field);
            const { type, sort } = variables
            return `${type} ${sort}`
          },
        }
      }
    },
    Page: {
      fields: {
        media: {
          merge: (existing = [], incoming) => {
            return [...existing, ...incoming]
          }
        }
      }
    },
  }
})
const client = new ApolloClient({
  link,
  cache,
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
