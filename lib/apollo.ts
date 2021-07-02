import { ApolloClient, InMemoryCache } from '@apollo/client'

export const createClient = (token?: string) => {
  const args = {
    uri: process.env.NEXT_PUBLIC_HASURA_APOLLO_CLIENT_URI,
    cache: new InMemoryCache(),
    headers: {}
  }
  if (token) {
    args.headers = { authorization: `Bearer ${token}` }
  }

  return new ApolloClient(args)
}
