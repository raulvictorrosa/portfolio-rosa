const path = require('path')

module.exports = {
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE
  },
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en'
  }
}
