import { useUpdateBlog } from 'actions/blogs'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import PortfolioDropdown from 'components/shared/Dropdown'
import Masthead from 'components/shared/Masthead'
import BlogApi from 'lib/api/blogs'
import Link from 'next/link'
import { Col, Row } from 'reactstrap'
import auth0, { withAuth } from 'utils/auth0'

const Dashboard = ({ user, blogs, loading }) => {
  const [updateBlog] = useUpdateBlog()

  const changeBlogStatus = async (blogId, status) => {
    await updateBlog(blogId, { status })
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
      {blogs
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
    <BaseLayout navClass="transparent" user={user} loading={false}>
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

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
  const { accessToken } = await auth0.getSession(req)
  const json = await new BlogApi(accessToken).getByUser()
  return { blogs: json.data }
})('admin')

export default Dashboard
