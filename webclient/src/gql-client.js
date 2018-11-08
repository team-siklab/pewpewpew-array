import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

// :: TODO change this to the real URL
const endpoint = createHttpLink({
  uri: 'http://localhost:4000'
})

export const client = new ApolloClient({
  link: endpoint,
  cache: new InMemoryCache()
})

// export default client
