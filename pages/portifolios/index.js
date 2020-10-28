// import Link from 'next/link'
import { useGetPosts } from '@/actions'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import { Fragment } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row
} from 'reactstrap'

const Portifolio = () => {
  const { data, error, loading } = useGetPosts()

  const renderPosts = (posts) =>
    posts.map((post, index) => (
      <Col md="4" key={index}>
        {/* <Link as={`/portifolios/${post.id}`} href="/portifolios/[id]"> */}
        {/* <a> */}
        <Fragment key={index}>
          <span>
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">
                Some Position {index}
              </CardHeader>
              <CardBody>
                <p className="portfolio-card-city"> Some Location {index} </p>
                <CardTitle className="portfolio-card-title">
                  Some Company {index}
                </CardTitle>
                <CardText className="portfolio-card-text">
                  Some Description {index}
                </CardText>
                <div className="readMore"> </div>
              </CardBody>
            </Card>
          </span>
        </Fragment>
        {/* </a> */}
        {/* </Link> */}
      </Col>
    ))

  // console.log(loading)
  return (
    <BaseLayout>
      <BasePage className="portfolio-page" title="Portifolio">
        <Row>
          {loading === true && <p>Loading data...</p>}
          {error && <div className="alert alert-danger">{error.message}</div>}
          {data && renderPosts(data)}
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default Portifolio
