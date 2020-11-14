import PortfolioApi from '@/lib/api/portifolios'

export default async function createPortfolio(req, res) {
  try {
    const data = req.body
    await new PortfolioApi().createPortfolio
    return res.json({ message: 'Portfolio was created!' })
  } catch (error) {
    return res.status(error.status || 400).end(error.message)
  }
}
