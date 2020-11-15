import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import withAuth from 'hoc/withAuth'

const BlogEditor = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage className="blog-editor" title="Blog Editor" />
    </BaseLayout>
  )
}

export default withAuth(BlogEditor)('admin')
