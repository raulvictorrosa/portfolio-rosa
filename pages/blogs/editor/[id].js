import { useGetBlog, useUpdateBlog } from 'actions/blogs'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import withAuth from 'hoc/withAuth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Editor } from 'slate-simple-editor'

const BlogUpdateEditor = ({ user, loading }) => {
  const router = useRouter()
  const { data } = useGetBlog(router.query.id)
  const [
    updateBlog,
    { data: updatedBlog, error, loading: isBlogSaving }
  ] = useUpdateBlog(router.query.id)

  const _updateBlog = async (data) => {
    await updateBlog(router.query.id, data)
    toast.success('Blog updated!')
  }

  if (error) {
    toast.error(error)
  }

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage className="blog-editor">
        {typeof window !== 'undefined' && data && data.content && (
          <Editor
            header="Update Your Blog..."
            initialContent={data.content}
            onSave={_updateBlog}
            loading={isBlogSaving}
          />
        )}
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogUpdateEditor)('admin')
