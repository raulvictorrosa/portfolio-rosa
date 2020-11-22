import { useGetBlog } from 'actions/blogs'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import withAuth from 'hoc/withAuth'
import { useRouter } from 'next/router'
import { Editor } from 'slate-simple-editor'

const BlogUpdateEditor = ({ user, loading }) => {
  const router = useRouter()
  const { data, error } = useGetBlog(router.query.id)

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage className="blog-editor">
        {typeof window !== 'undefined' && data && data.content && (
          <Editor
            header="Update Your Blog..."
            initialContent={data.content}
            onSave={() => {}}
          />
        )}
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogUpdateEditor)('admin')
