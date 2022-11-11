import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './context/Context'

import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = JSON.parse(window.localStorage.getItem('token'))
  console.log(token)
  if (token) {
    operation.setContext({
      headers: {
        authorization: `bearer ${token}`
      }
    })
  }
  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.localStorage.removeItem('token')
    window.location = '/user'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-dbyte-davitpra.vercel.app/graphql'
    })
  ])
})

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <ContextProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ContextProvider>
)
