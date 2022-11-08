import React from 'react'
import ReactDOM from 'react-dom/client'
// importamos las dependencias.
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App'

// inicalizamos el cliente de esta manera:
const client = new ApolloClient({
  // es URI NO URL.
  uri: 'https://petgram-dbyte-davitpra.vercel.app/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  // Conectamos el cliente con la APP
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
