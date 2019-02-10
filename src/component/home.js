const component = require('../component')
const articles = require('../articles')
const footer = require('./footer')
const social = require('./social')

module.exports = component(({ h2, a }, data) => [
  h2(a('Articles', { href: '/articles' }), { id: 'articles' }),
  articles(data),
  footer([
    social()
  ])
])
