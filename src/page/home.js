const component = require('../component')
const articles = require('../component/articles')
const page = require('../component/page')
const social = require('../component/social')
const footer = require('../component/footer')

module.exports = component(({ h2, a }, data) => page([
  h2(a('Articles', { href: '/articles' })),
  articles(data)
], footer(social())))
