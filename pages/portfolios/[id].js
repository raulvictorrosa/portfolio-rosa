import { useGetUser } from '@/actions/user'
import BasePage from '@/components/BasePage'
import BaseLayout from '@/components/layouts/BaseLayout'
import PortfolioApi from '@/lib/api/portfolios'

const Portfolio = ({ portfolio }) => {
  const { data: dataU, loading: loadingU } = useGetUser()

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage title="Potfolio Detail">{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  )
}

export async function getServerSideProps({ query }) {
  const json = await new PortfolioApi().getById(query.id)
  const portfolio = json.data
  return { props: { portfolio } }
}

export default Portfolio
