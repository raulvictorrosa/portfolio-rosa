import { useGetData } from '@/actions'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import { useRouter } from 'next/router'

const Portifolio = () => {
  const router = useRouter()
  const { data: portifolio, error, loading } = useGetData(
    router.query.id ? `/api/v1/posts/${router.query.id}` : null
  )

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading Data...</p>}
        {error && <div className="alert alert-danger">{error.message}</div>}
        {portifolio && (
          <>
            <h1>{portifolio.title}</h1>
            <p>{portifolio.body}</p>
            <p>{portifolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  )
}

export default Portifolio
