import { useGetUserBlogs, useUpdateBlog } from 'actions/blogs'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import PortfolioDropdown from 'components/shared/Dropdown'
import Masthead from 'components/shared/Masthead'
import withAuth from 'hoc/withAuth'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { Col, Row } from 'reactstrap'

const Dashboard = ({ user, loading }) => {
  const [updateBlog] = useUpdateBlog()
  const { data: blogs, mutate } = useGetUserBlogs()

  const changeBlogStatus = async (blogId, status) => {
    await updateBlog(blogId, { status })
      .then(() => mutate())
      .catch((err) => toast.error('Something went wrong!'))
  }

  const createOption = (blogStatus) => {
    return blogStatus === 'draft'
      ? { view: 'Publish Story', value: 'published' }
      : { view: 'Make a Draft', value: 'draft' }
  }

  const createOptions = (blog) => {
    const option = createOption(blog.status)

    return [
      {
        key: `${blog._id}-publish`,
        text: option.view,
        handlers: { onClick: () => changeBlogStatus(blog._id, option.value) }
      },
      {
        key: `${blog._id}-delete`,
        text: 'Delete',
        handlers: { onClick: () => alert('Clicking delete') }
      }
    ]
  }

  const renderBlogs = (blogs, status) => (
    <ul className="user-blogs-list">
      {blogs &&
        blogs
          .filter((blog) => blog.status === status)
          .map((blog) => (
            <li key={blog._id}>
              <Link href={`/blogs/editor/${blog._id}`}>
                <a>{blog.title}</a>
              </Link>
              <PortfolioDropdown items={createOptions(blog)} />
            </li>
          ))}
    </ul>
  )

  return (
    <BaseLayout navClass="transparent" user={user} loading={loading}>
      <Masthead imagePath="/images/home-bg.jpg" />
      <BasePage className="dashboard-page blog-user-page">
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
            {renderBlogs(blogs, 'published')}
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
            {renderBlogs(blogs, 'draft')}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(Dashboard)('admin')
