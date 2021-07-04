import { gql } from '@apollo/client'

export const GET_ARTICLES_QUERY = gql`
  query GetArticles {
    articles {
      content
      id
      title
      user_id
    }
  }
`
