import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import { authorizedUser } from '@/utils/auth0'

const SecretSSR = ({ user }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage className="secrete-page" title="I am About Page">
        <h1>I am Secret Page</h1>
        <p>Secret Content Here - Hello {user && user.name}</p>
      </BasePage>
    </BaseLayout>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const user = await authorizedUser(req, res)

  return { props: { user } }
}

export default SecretSSR
