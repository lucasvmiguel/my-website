import { useQuery } from '@apollo/client'
import { GET_ARTICLES_QUERY } from '../../graphql/user'
import { GetArticles } from '../../graphql/__generated__/GetArticles'

const ArticleList = () => {
  const { data, loading, error } = useQuery<GetArticles>(GET_ARTICLES_QUERY)

  return (
    <>
      <p>data: {JSON.stringify(data)}</p>
      <p>loading: {loading}</p>
      <p>error: {error}</p>
    </>
  )
}

export default ArticleList
