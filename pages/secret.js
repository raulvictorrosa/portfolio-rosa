import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import withAuth from 'hoc/withAuth'

const Secret = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage className="secret-page" title="I am About Page">
        <h1>I am Secret Page</h1>
        <p>Secret Content Here - Hello {user.name}</p>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(Secret)()
