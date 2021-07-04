import { gql } from '@apollo/client'

export const GET_ARTICLES_QUERY = gql`
  query GetArticles {
    articles {
      content
      picture_href
      id
      title
      user_id
    }
  }
`
