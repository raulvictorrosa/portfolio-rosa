import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container } from 'reactstrap'

const BasePage = (props) => {
  const router = useRouter()
  const {
    indexPage,
    className,
    title,
    metaTitle = 'Portfolio Rosa - Raul Rosa',
    metaDescription = 'My name is Filip Jerga and I am an experienced software engineer and freelance developer. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience.',
    canonicalPath,
    children
  } = props

  const pageType = indexPage ? 'index-page' : 'base-page'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={metaTitle} key="title" />
        <meta name="description" content={metaDescription} key="description" />
        <meta property="og:title" content={metaTitle} key="og:title" />
        <meta
          property="og:description"
          content={metaDescription}
          key="og:description"
        />
        <meta property="og:locale" content="en_US" key="og:locale" />
        <meta
          property="og:url"
          content={`${process.env.BASE_URL}${router.asPath}`}
          key="og:url"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:image"
          content={`${process.env.BASE_URL}/images/section-1.png`}
          key="og:image"
        />
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}${
            canonicalPath ? canonicalPath : router.asPath
          }`}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-ixon" href="/images/favicon.ico" />
      </Head>
      {indexPage && children}
      {!indexPage && (
        <div className={`${pageType} ${className}`}>
          <Container>
            {title && (
              <div className="page-header">
                <h1 className="page-header-title">{title}</h1>
              </div>
            )}
            {children}
          </Container>
        </div>
      )}
    </>
  )
}

BasePage.defaultProps = {
  className: ''
}

export default BasePage
