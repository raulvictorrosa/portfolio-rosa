import BaseApi from 'lib/api/BaseApi'

class PortfolioApi extends BaseApi {
  constructor(accessToken) {
    super(accessToken, '/portfolios')
  }
}

export default PortfolioApi
