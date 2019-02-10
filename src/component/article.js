const component = require('../component')
const { isEmpty } = require('ramda')
const fs = require('fs')
var hljs = require('highlight.js') // https://highlightjs.org/

module.exports = component(({ article, header, h2, p, h3, ul, li, a, span }, { filePath, title, name, file, stats, hashes }) => [
  article([
    header([
      h2([
        a('articles', { href: '/articles' }),
        span(' / '),
        a(title, { href: `/articles/${name}.html` })
      ]),
      p(stats.mtime.toLocaleString())
    ]),
    markdown(filePath),
    ...(isEmpty(hashes) ? [] : [
      h3('Revisions'),
      ul(
        hashes
          .map(({ hash, date, author }) => li(a(`${date.toLocaleString()} by ${author}`, { href: commitUrl(hash) }))))
    ])
  ])
])

const markdown = path => fs
  .createReadStream(path)
  .pipe(require('markdown-stream')('full', {
    html: true,
    highlight: (str, lang) => lang ? hljs.highlight(lang, str).value : str
  }))

function commitUrl (hash) {
  return `https://github.com/bas080/bas080.github.io/commit/${hash}`
}
