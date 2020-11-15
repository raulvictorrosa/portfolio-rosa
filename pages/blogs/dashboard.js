import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import withAuth from '@/hoc/withAuth'

const Dashboard = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage className="dashboard-page" title="Dashboard" />
    </BaseLayout>
  )
}

export default withAuth(Dashboard)('admin')
