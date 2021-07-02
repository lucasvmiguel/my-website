import { PropsWithChildren } from 'react'
import type { AppProps } from 'next/app'

import useSWR from 'swr'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ApolloProvider } from '@apollo/client'

import { createClient } from '../lib/apollo'
import fetcher from '../lib/fetcher'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ApolloProviderComponent>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProviderComponent>
    </UserProvider>
  )
}

const ApolloProviderComponent = ({ children }: { children: PropsWithChildren<{}> }) => {
  const { data } = useSWR('/api/get-token', fetcher)
  const client = createClient(data?.token)

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default MyApp
