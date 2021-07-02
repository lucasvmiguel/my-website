import { NextPageContext } from 'next'

import { ApolloError } from '@apollo/client'

import { client } from '../../lib/apollo'
import { GET_ARTICLE_QUERY } from '../../graphql/article'

interface ArticleProps {
  article: any
  error: ApolloError | null
  loading: boolean
}

const Article = ({ article, loading, error }: ArticleProps) => {
  return (
    <>
      <p>data: {JSON.stringify(article)}</p>
      <p>loading: {String(loading)}</p>
      <p>error: {String(error)}</p>
    </>
  )
}

export const getServerSideProps = async (context: NextPageContext): Promise<{ props: ArticleProps }> => {
  const { id } = context.query
  const { data, error, loading } = await client.query({
    query: GET_ARTICLE_QUERY,
    variables: { id }
  })

  return {
    props: {
      article: data,
      error: error || null,
      loading
    }
  }
}

export default Article
