import { useGetPostById } from '@/actions'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import { useRouter } from 'next/router'

const Portfolio = () => {
  const router = useRouter()
  const { data: portfolio, error, loading } = useGetPostById(router.query.id)

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading Data...</p>}
        {error && <div className="alert alert-danger">{error.message}</div>}
        {portfolio && (
          <>
            <h1>{portfolio.title}</h1>
            <p>{portfolio.body}</p>
            <p>{portfolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolio
