import { useGetUser } from 'actions/user'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'

const BlogDetail = () => {
  const { data, loading } = useGetUser()
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="about-page" title="I am Blog Detail" />
    </BaseLayout>
  )
}

export default BlogDetail
