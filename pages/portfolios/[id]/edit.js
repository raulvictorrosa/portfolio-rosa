import { useGetPortfolio } from '@/actions/portfolios'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import withAuth from '@/hoc/withAuth'
import { useRouter } from 'next/router'

const PortfolioEdit = ({ user }) => {
  const router = useRouter()
  const { data } = useGetPortfolio(router.query.id)

  return (
    <BaseLayout user={user} loading={false}>
      <BasePage title="Potfolio Edit"></BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioEdit)('admin')
