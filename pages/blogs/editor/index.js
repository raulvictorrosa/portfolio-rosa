import { useCreateBlog } from 'actions/blogs'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import withAuth from 'hoc/withAuth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Editor } from 'slate-simple-editor'

const BlogEditor = ({ user, loading }) => {
  const router = useRouter()
  const [
    createBlog,
    { data: createdBlog, error, loading: blogLoading }
  ] = useCreateBlog()

  const saveBlog = async (data) => {
    const createdBlog = await createBlog(data)
    router.push(`/blogs/editor/${createdBlog._id}`)
    alert('Blog was created!')
  }

  if (error) {
    toast.error(error)
  }

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage className="blog-editor">
        {typeof window !== 'undefined' && (
          <Editor
            header="Blog Editor"
            onSave={saveBlog}
            loading={blogLoading}
          />
        )}
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogEditor)('admin')
