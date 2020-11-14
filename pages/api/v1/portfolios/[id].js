import PortfolioApi from '@/lib/api/portfolios'
// import auth0 from '@/utils/auth0'

export default async function handlePortfolio(req, res) {
  // try {
  // const { accessToken } = await auth0.getSession(req)
  const json = await new PortfolioApi().getById(req.query.id)
  return res.json(json.data)
  // } catch (error) {
  // return res.status(error.status || 422).json(error.response.data)
  // }
}
