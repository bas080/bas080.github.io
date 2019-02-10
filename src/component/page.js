const component = require('../component')
const path = require('path')
const fs = require('fs')

const inlineStyle = component(({ style }, filePath) => style(
  fs.createReadStream(filePath)))

module.exports = component(({ header, doctype, html, head, body, title, h1, section, a }, contents, footer) => {
  return [
    doctype(),
    html([
      head([
        inlineStyle(path.join(__dirname, '../styles/main.css')),
        title('bas080.github.io')
      ]),
      body([
        header(
          h1(a('bas080.github.io', {
            href: '/index.html'
          })),
          { class: 'invert' }
        ),
        section(contents, { class: 'content' }),
        footer
      ])
    ], {
      lang: 'en'
    })
  ]
})
