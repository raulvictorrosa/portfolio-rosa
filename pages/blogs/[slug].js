import { useGetUser } from 'actions/user'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import Avatar from 'components/shared/Avatar'
import BlogApi from 'lib/api/blogs'
import { Col, Row } from 'reactstrap'
import { SlateView } from 'slate-simple-editor'

const BlogDetail = ({ blog, author }) => {
  const { data, loading } = useGetUser()
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        className="slug-container"
        metaTitle={`${blog.title} - Raul Rosa`}
        metaDescription={blog.subTitle}
      >
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Avatar
              image={author.picture}
              title={author.name}
              date={blog.createdAt}
            />
            <hr />
            <SlateView initialContent={blog.content} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const { data } = await new BlogApi().getAll()
  const paths = data.map(({ blog }) => ({
    params: {
      slug: blog.slug
    }
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const {
    data: { blog, author }
  } = await new BlogApi().getBySlug(params.slug)
  return { props: { blog, author }, revalidate: 1 }
}

export default BlogDetail
