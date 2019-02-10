const component = require('../component')

const articleStats = component(({ article, header, h3, a, p, span }, { title, name, stats }) => article([
  header(h3(a(title, { href: `/articles/${name}.html` }))),
  p(stats.mtime.toLocaleString())
], { class: 'article-stats' }))

module.exports = component((_, articles) => articles.map(articleStats))
