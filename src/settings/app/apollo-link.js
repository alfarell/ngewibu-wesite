import { HttpLink } from '@apollo/client'

const customLink = new HttpLink({
  uri: process.env.REACT_APP_BASE_URL,
  method: "POST"
})

export default customLink