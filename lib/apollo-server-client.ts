import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.HASURA_APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
  headers: {
    'X-Hasura-Admin-Secret': process.env.HASURA_APOLLO_CLIENT_TOKEN as string
  }
})
