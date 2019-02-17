const component = require('../component')
const article = require('../component/article')
const articles = require('../component/articles')
const footer = require('../component/footer')
const page = require('../component/page')
const { isEmpty } = require('ramda')

module.exports = component((_, data) =>
  page(article(data.article), keepReading(data)))

const keepReading = component(({ a, section, header, h2 }, data) => {
  const notSelf = data.articles.filter(({ file }) => file !== data.article.file)

  if (isEmpty(notSelf)) { return [] }

  return footer([
    header(h2(a('Articles', { href: '/articles' }))),
    articles(notSelf)
  ])
})
