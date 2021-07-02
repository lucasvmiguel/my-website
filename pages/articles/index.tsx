import { useQuery } from '@apollo/client'
import { GET_ARTICLES_QUERY } from '../../graphql/article'

const ArticleList = () => {
  const { data, loading, error } = useQuery(GET_ARTICLES_QUERY)

  return (
    <>
      <p>data: {JSON.stringify(data)}</p>
      <p>loading: {String(loading)}</p>
      <p>error: {String(error)}</p>
    </>
  )
}

export default ArticleList
