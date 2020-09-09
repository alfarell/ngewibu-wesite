import { InMemoryCache } from '@apollo/client'

const customCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Page: {
          keyArgs: (_, { variables, field }) => {
            const { type, sort } = variables
            return `${type} ${sort || 'default'}`
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
        },
      }
    },
  }
})

export default customCache