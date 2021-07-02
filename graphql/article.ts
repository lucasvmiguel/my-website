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

export const GET_ARTICLE_QUERY = gql`
  query GetArticle($id: Int!) {
    articles_by_pk(id: $id) {
      id
      content
      picture_href
      title
      user_id
    }
  }
`
