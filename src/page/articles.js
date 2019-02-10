const component = require('../component')
const page = require('../component/page')

const articleStats = component(({ article, header, h3, a, p, span }, { title, name, stats }) => article([
  header(h3(a(title, { href: `/articles/${name}.html` }))),
  p(stats.mtime.toLocaleString())
]))

module.exports = component(({ h2, a }, articles) => page([
  h2(a('Articles', { href: '/articles' })),
  articles.map(articleStats)
]))
