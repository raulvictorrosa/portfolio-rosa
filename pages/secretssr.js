import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import { withAuth } from '@/utils/auth0'
// import { authorizedUser, withAuth } from '@/utils/auth0'

const SecretSSR = ({ user, title }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage className="secrete-page" title="I am About Page">
        <h1>I am Secret Page</h1>
        <p>Secret Content Here - Hello {user && user.name}</p>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>
  )
}

// export const getServerSideProps = async ({ req, res }) => {
//   const user = await authorizedUser(req, res)

//   return { props: { user } }
// }

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: 'My new title!' })
    }, 500)
  })
}

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
  const title = await getTitle()
  return title
})

export default SecretSSR
