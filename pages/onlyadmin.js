import BasePage from 'components/BasePage'
import BaseLayout from 'components/layouts/BaseLayout'
import withAuth from 'hoc/withAuth'

const OnlyAdmin = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage className="secret-page" title="I am About Page">
        <h1>I am Admin Page</h1>
        <p>Secret Content Here - Hello {user.name}</p>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(OnlyAdmin)('admin')
