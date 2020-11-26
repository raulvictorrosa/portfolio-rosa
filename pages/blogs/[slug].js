import { useGetUser } from 'actions/user'
import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import BlogApi from 'lib/api/blogs'
import { Col, Row } from 'reactstrap'
import { SlateView } from 'slate-simple-editor'

const BlogDetail = ({ blog }) => {
  const { data, loading } = useGetUser()
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="slug-container">
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <SlateView initialContent={blog.content} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const json = await new BlogApi().getAll()
  const blogs = json.data
  const paths = blogs.map((b) => ({
    params: {
      slug: b.slug
    }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const json = await new BlogApi().getBySlug(params.slug)
  return { props: { blog: json.data } }
}

export default BlogDetail
